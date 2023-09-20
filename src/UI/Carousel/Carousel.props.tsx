export interface CarouselProps {
  title?: string;
  route?: string;
  movies?: { total: number; items: any[] };
  settings?: object;
}
