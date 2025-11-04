// pages/campaigns/index.tsx
import { useState } from "react";
import Layout from "../../components/layout/Layout";
import Button from "../../components/ui/Button";
import CreateCampaignModal from "../../components/campaigns/CreateCampaignModal";
import { Campaign } from "../../types/campaign";

const CampaignsPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [campaigns, setCampaigns] = useState<Campaign[]>([
    {
      id: "1",
      name: "Q4 Product Launch",
      type: "Email",
      description: "Launch campaign for new product features and updates",
      status: "Active",
      sent: 1250,
      replies: 45,
      createdAt: "2023-10-15",
    },
    {
      id: "2",
      name: "Customer Onboarding",
      type: "WhatsApp",
      description: "Welcome series for new customers with product tutorials",
      status: "Active",
      sent: 890,
      replies: 67,
      createdAt: "2023-10-10",
    },
    {
      id: "3",
      name: "Holiday Promotion",
      type: "Email",
      description: "Special holiday discounts and promotional offers",
      status: "Paused",
      sent: 3200,
      replies: 210,
      createdAt: "2023-09-28",
    },
    {
      id: "4",
      name: "Webinar Invitation",
      type: "Email",
      description: "Invite users to join our weekly product webinars",
      status: "Draft",
      sent: 0,
      replies: 0,
      createdAt: "2023-11-01",
    },
  ]);

  const handleCreateCampaign = async (data: any) => {
    setIsLoading(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const newCampaign: Campaign = {
      id: Date.now().toString(),
      name: data.name,
      type: data.type,
      description: data.description,
      status: "Draft",
      sent: 0,
      replies: 0,
      createdAt: new Date().toISOString().split("T")[0],
    };

    setCampaigns((prev) => [newCampaign, ...prev]);
    setIsLoading(false);
    setIsModalOpen(false);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active":
        return "bg-green-100 text-green-800 border-green-200";
      case "Paused":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "Draft":
        return "bg-gray-100 text-gray-800 border-gray-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  return (
    <Layout>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
        <div className="mb-4 sm:mb-0">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Campaigns</h1>
          <p className="text-gray-600">
            Manage and track your marketing campaigns
          </p>
        </div>
        <Button onClick={() => setIsModalOpen(true)} size="lg">
          + Create New Campaign
        </Button>
      </div>

      {/* Campaigns Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Campaign
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Type
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Sent
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Replies
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Created
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {campaigns.map((campaign) => (
                <tr
                  key={campaign.id}
                  className="hover:bg-gray-50 transition-colors duration-150 cursor-pointer"
                  onClick={() => console.log("View campaign:", campaign.id)}
                >
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10 bg-blue-100 rounded-lg flex items-center justify-center">
                        <span className="text-blue-600 font-semibold">
                          {campaign.type === "Email" ? "✉️" : "💬"}
                        </span>
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">
                          {campaign.name}
                        </div>
                        <div className="text-sm text-gray-500 max-w-xs truncate">
                          {campaign.description}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`inline-flex px-2.5 py-0.5 rounded-full text-xs font-medium border ${getStatusColor(
                        campaign.status
                      )}`}
                    >
                      {campaign.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {campaign.type}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <span className="font-medium">
                      {campaign.sent.toLocaleString()}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <span className="font-medium text-green-600">
                      {campaign.replies.toLocaleString()}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {new Date(campaign.createdAt).toLocaleDateString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {campaigns.length === 0 && (
        <div className="text-center py-12">
          <div className="text-gray-400 text-6xl mb-4">📧</div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            No campaigns yet
          </h3>
          <p className="text-gray-500 mb-4">
            Get started by creating your first campaign
          </p>
          <Button onClick={() => setIsModalOpen(true)}>
            Create Your First Campaign
          </Button>
        </div>
      )}

      <CreateCampaignModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleCreateCampaign}
        loading={isLoading}
      />
    </Layout>
  );
};

export default CampaignsPage;
