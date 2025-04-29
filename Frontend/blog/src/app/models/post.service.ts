export interface Post {
  id: number;
  title: String;
  content: String;
  author: String; 
  tags: [String];
  createdAt: Date;
 }