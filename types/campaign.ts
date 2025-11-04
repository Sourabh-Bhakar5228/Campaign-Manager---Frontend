// types/campaign.ts
export interface Campaign {
  id: string;
  name: string;
  type: "Email" | "WhatsApp";
  description: string;
  status: "Active" | "Paused" | "Draft";
  sent: number;
  replies: number;
  createdAt: string;
}

export interface CampaignFormData {
  name: string;
  type: "Email" | "WhatsApp";
  description: string;
}

export interface SummaryStats {
  activeCampaigns: number;
  emailsSent: number;
  replies: number;
  meetingsBooked: number;
}
