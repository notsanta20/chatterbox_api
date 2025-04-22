-- AlterTable
ALTER TABLE "Group" ADD COLUMN     "profile" TEXT;

-- AlterTable
ALTER TABLE "Users" ADD COLUMN     "bio" TEXT,
ADD COLUMN     "profile" TEXT;
