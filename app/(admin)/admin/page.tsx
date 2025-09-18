"use client";

import { useState, useEffect } from "react";
import {
  Users,
  FileText,
  Image,
  Calendar,
  Globe,
  GraduationCap,
  TrendingUp,
  Activity,
  Search,
  Bell,
  Settings,
  User,
  Home,
  BarChart3,
  FolderOpen,
  CreditCard,
  UserCheck,
  LogIn,
  UserPlus,
  Menu,
  X
} from "lucide-react";

interface Stats {
  stories: number;
  gallery: number;
  forms: number;
  newsEvents: number;
  countries: number;
  universities: number;
}

interface StatItem {
  name: string;
  value: string;
  icon: React.ComponentType<{ className?: string }>;
  change: string;
}

export default function AdminDashboard() {
  const [stats, setStats] = useState<Stats>({
    stories: 0,
    gallery: 0,
    forms: 0,
    newsEvents: 0,
    countries: 0,
    universities: 0,
  });
  const [loading, setLoading] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      setLoading(true);

      // Fetch all stats in parallel
      const [
        storiesRes,
        galleryRes,
        formsRes,
        newsRes,
        countriesRes,
        universitiesRes,
      ] = await Promise.all([
        fetch("/api/stories"),
        fetch("/api/gallery"),
        fetch("/api/forms"),
        fetch("/api/news-events"),
        fetch("/api/countries"),
        fetch("/api/universities"),
      ]);

      const [stories, gallery, forms, newsEvents, countries, universities] =
        await Promise.all([
          storiesRes.json(),
          galleryRes.json(),
          formsRes.json(),
          newsRes.json(),
          countriesRes.json(),
          universitiesRes.json(),
        ]);

      setStats({
        stories: stories.total || stories.documents?.length || 0,
        gallery: gallery.total || gallery.documents?.length || 0,
        forms: forms.total || forms.documents?.length || 0,
        newsEvents: newsEvents.total || newsEvents.documents?.length || 0,
        countries: countries.total || countries.documents?.length || 0,
        universities: universities.total || universities.documents?.length || 0,
      });
    } catch (error) {
      console.error("Failed to fetch stats:", error);
    } finally {
      setLoading(false);
    }
  };

  const statsData: StatItem[] = [
    {
      name: "Total Stories",
      value: stats.stories.toString(),
      icon: Users,
      change: "+12%",
    },
    {
      name: "Gallery Items",
      value: stats.gallery.toString(),
      icon: Image,
      change: "+8%",
    },
    {
      name: "Form Submissions",
      value: stats.forms.toString(),
      icon: FileText,
      change: "+23%",
    },
    {
      name: "News & Events",
      value: stats.newsEvents.toString(),
      icon: Calendar,
      change: "+5%",
    },
    {
      name: "Countries",
      value: stats.countries.toString(),
      icon: Globe,
      change: "+2%",
    },
    {
      name: "Universities",
      value: stats.universities.toString(),
      icon: GraduationCap,
      change: "+15%",
    },
  ];

  const menuItems = [
    { icon: Home, label: "Dashboard", active: true },
    { icon: BarChart3, label: "Tables" },
    { icon: CreditCard, label: "Billing" },
    { icon: FolderOpen, label: "RTL" },
    { icon: UserCheck, label: "Profile" },
    { icon: LogIn, label: "Sign In" },
    { icon: UserPlus, label: "Sign Up" },
  ];

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-50">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-teal-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex">

      {/* Main Content */}
      <div className="flex-1 lg:ml-0">

        {/* Dashboard Content */}
        <div className="p-6 space-y-6">
          {/* Header */}
          <div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Dashboard</h1>
            <p className="text-gray-600">
              Welcome back! Here's what's happening with your admin panel.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {statsData.map((stat) => {
              const Icon = stat.icon;
              return (
                <div key={stat.name} className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <p className="text-sm font-medium text-gray-600 mb-1">
                        {stat.name}
                      </p>
                      <p className="text-3xl font-bold text-gray-900">
                        {stat.value}
                      </p>
                    </div>
                    <div className="w-12 h-12 bg-gradient-to-br from-teal-400 to-blue-500 rounded-xl flex items-center justify-center">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div className="flex items-center">
                    <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                    <span className="text-sm text-green-500 font-medium">
                      {stat.change}
                    </span>
                    <span className="text-sm text-gray-500 ml-1">
                      from last month
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Recent Activity */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100">
            <div className="p-6 border-b border-gray-100">
              <h2 className="text-lg font-semibold text-gray-900 flex items-center">
                <Activity className="h-5 w-5 mr-2" />
                Recent Activity
              </h2>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-teal-400 to-blue-500 rounded-full flex items-center justify-center">
                    <Users className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">
                      New story submitted
                    </p>
                    <p className="text-sm text-gray-500">2 hours ago</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-green-500 rounded-full flex items-center justify-center">
                    <FileText className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">
                      Form submission received
                    </p>
                    <p className="text-sm text-gray-500">4 hours ago</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-purple-500 rounded-full flex items-center justify-center">
                    <Image className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">
                      Gallery updated
                    </p>
                    <p className="text-sm text-gray-500">6 hours ago</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}
    </div>
  );
}