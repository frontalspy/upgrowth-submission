export interface ImagesItf {
  id: string;
  altDescription: string;
  urls: {
    full: string;
    thumb: string;
    small: string;
  };
  links: {
    html: string;
    download: string;
  };
  likes: number;
  user: {
    username: string;
  };
}
