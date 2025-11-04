// components/ui/SummaryCard.tsx
interface SummaryCardProps {
  title: string;
  value: number;
  icon: string;
  color: string;
  trend?: number;
}

const SummaryCard = ({
  title,
  value,
  icon,
  color,
  trend,
}: SummaryCardProps) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow duration-200">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-600 text-sm font-medium mb-1">{title}</p>
          <p className="text-3xl font-bold text-gray-900">
            {value.toLocaleString()}
          </p>
          {trend !== undefined && (
            <p
              className={`text-sm mt-1 ${
                trend >= 0 ? "text-green-600" : "text-red-600"
              }`}
            >
              {trend >= 0 ? "↗" : "↘"} {Math.abs(trend)}% from last month
            </p>
          )}
        </div>
        <div className={`p-3 rounded-xl ${color}`}>
          <span className="text-2xl">{icon}</span>
        </div>
      </div>
    </div>
  );
};

export default SummaryCard;
