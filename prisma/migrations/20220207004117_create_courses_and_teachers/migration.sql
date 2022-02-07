-- DropIndex
DROP INDEX "courses_fk_id_teacher_key";

-- AlterTable
ALTER TABLE "teachers" ADD COLUMN     "coursesId" TEXT;
