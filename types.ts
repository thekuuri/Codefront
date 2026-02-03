
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Product {
  id: string;
  name: string;
  platform: string;
  client?: string;
  description: string;
  features: string[];
  image: string;
}

export interface ContactInfo {
  location: string;
  address: string;
  phones: string[];
  emails: string[];
}
