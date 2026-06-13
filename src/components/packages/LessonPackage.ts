export interface LessonPackage {
  id: string;
  title: string;
  subtitle: string;
  price: number;
  priceLabel: string;
  lessonLength: number;
  numLessons: number;
  benefits: string[];
  isPopular?: boolean;
  ctaLabel: string;
}
