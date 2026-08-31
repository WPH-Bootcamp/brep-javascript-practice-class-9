import { type CourseCardProps } from './types/course-card.type';
function CourseCard({
  title,
  mentor,
  onEnroll,
  description = 'Belum ada deskripsi',
}: CourseCardProps) {
  return (
    <article>
      <h2>{title}</h2>
      <p>- {mentor}</p>
      <button onClick={onEnroll}>Enroll</button>
      <p>{description}</p>
    </article>
  );
}

export default CourseCard;
