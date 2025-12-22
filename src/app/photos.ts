import { getPhotos } from '@/api';
import { queryOptions } from '@tanstack/react-query';

export const photosOptions = queryOptions({
  queryKey: ['photos'],
  queryFn: getPhotos
});
