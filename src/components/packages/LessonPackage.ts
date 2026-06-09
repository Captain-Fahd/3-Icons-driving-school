export interface LessonPackage {
    title: string,
    subtitle: string,
    price: number,
    priceLabel: string,
    lessonLength: number,
    numLessons: 1 | 5 | 10,
    benefits: string[],
    isPopular?: boolean,
    ctaLabel: string,
}
