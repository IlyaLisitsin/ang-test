export class VideoItem {
  id: string;
  thumbnail: string;
  publishedAt: string;
  title: string;
  description: string;

  constructor(id, thumbnail, publishedAt, title, description) {
    this.id = id;
    this.thumbnail = thumbnail;
    this.publishedAt = publishedAt;
    this.title = title;
    this.description = description;
  }
}
