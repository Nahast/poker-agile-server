import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Module({
  imports: [],
  providers: [
    {
      provide: PrismaService,
      inject: [],
      useFactory: () => {
        const hostname = '';

        return new PrismaService({
          log: ['query'],
          datasources: {
            sqlite: {
              url: `${hostname}`,
            },
          },
        });
      },
    },
  ],
  exports: [PrismaService],
})
export class PrismaModule {}
