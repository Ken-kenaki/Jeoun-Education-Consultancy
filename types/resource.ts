export interface Resource {
  $id: string;
  name: string;
  description?: string;
  type: string;
  size: number;
  fileId: string;
  createdAt?: string;
  mimeType?: string;
}