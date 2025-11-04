import { useState, useEffect } from "react";
import Head from "next/head";
import Layout from "../components/layout/Layout";
import SummaryCard from "../components/ui/SummaryCard";
import CampaignChart from "../components/charts/CampaignChart";

const Dashboard = () => {
  const [stats, setStats] = useState({
    activeCampaigns: 0,
    emailsSent: 0,
    replies: 0,
    meetingsBooked: 0,
  });

  useEffect(() => {
    // Simulate loading data
    setTimeout(() => {
      setStats({
        activeCampaigns: 12,
        emailsSent: 2450,
        replies: 189,
        meetingsBooked: 34,
      });
    }, 500);
  }, []);

  return (
    <>
      {/* ✅ Add Page Metadata */}
      <Head>
        <title>Campaign Manager | Dashboard</title>
        <meta
          name="description"
          content="Dashboard overview of your campaign performance including active campaigns, emails sent, replies, and meetings booked."
        />
      </Head>

      <Layout>
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard</h1>
          <p className="text-gray-600">
            Welcome back, <span className="font-semibold">Sourabh</span>! 👋
            Here's your campaign performance overview.
          </p>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <SummaryCard
            title="Active Campaigns"
            value={stats.activeCampaigns}
            icon="📊"
            color="bg-blue-100 text-blue-600"
            trend={8}
          />
          <SummaryCard
            title="Emails Sent"
            value={stats.emailsSent}
            icon="✉️"
            color="bg-green-100 text-green-600"
            trend={12}
          />
          <SummaryCard
            title="Replies Received"
            value={stats.replies}
            icon="💬"
            color="bg-yellow-100 text-yellow-600"
            trend={15}
          />
          <SummaryCard
            title="Meetings Booked"
            value={stats.meetingsBooked}
            icon="📅"
            color="bg-purple-100 text-purple-600"
            trend={22}
          />
        </div>

        {/* Chart Section */}
        <div className="mb-8">
          <CampaignChart />
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Recent Activity
          </h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                <span className="text-sm text-gray-700">
                  New campaign "Summer Sale" was created
                </span>
              </div>
              <span className="text-xs text-gray-500">2 hours ago</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                <span className="text-sm text-gray-700">
                  "Welcome Series" campaign reached 95% delivery rate
                </span>
              </div>
              <span className="text-xs text-gray-500">5 hours ago</span>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Dashboard;
