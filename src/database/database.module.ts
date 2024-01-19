import { Module, Provider } from "@nestjs/common";

const REPOSITORIES: Provider<Repository>[] = [
];

@Module({
    imports: [PrismaModule],
    providers: [...REPOSITORIES],
    exports: [...REPOSITORIES]
})
export class DatabaseModule {}