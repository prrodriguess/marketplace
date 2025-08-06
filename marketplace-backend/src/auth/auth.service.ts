import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';
import { PrismaService } from '../prisma/service';

@Injectable()
export class AuthService {
  constructor(private jwt: JwtService, private prisma: PrismaService) { }

  async signup(data: { email: string; password: string }) {
    const hashedPassword = await bcrypt.hash(data.password, 10);

    const user = await this.prisma.user.create({
      data: {
        email: data.email,
        password: hashedPassword,
      },
    })

    return this.signToken(user.id, user.email);
  }

  async login(data: { email: string; password: string }) {
    const user = await this.prisma.user.findUnique({
      where: { email: data.email },
    });

    if (!user || !(await bcrypt.compare(data.password, user.password))) {
      throw new Error('Credenciais inválidas');
    }

    return this.signToken(user.id, user.email);
  }

  private signToken(userId: number, email: string) {
    return {
      access_token: this.jwt.sign({ sub: userId, email }),
    };
  }
}
