import { Metric } from "@/types/weather";

interface MetricCardProps {
    metric: Metric;
}

export function MetricCard({ metric }: MetricCardProps) {

  const formatValue = () => {
    if (metric.type === "time" && typeof metric.value === "number") {
      return new Date(metric.value * 1000).toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      });
    }

    if (metric.name === "Humidity") {
      return `${metric.value}%`;
    }

    if (metric.name === "Wind Speed") {
      return `${metric.value} m/s`;
    }

    return metric.value;
  };

  return (
    <div className="flex flex-col items-center gap-2 text-xl font-extralight">
      <span>{metric.name}</span>
      <span>{formatValue()}</span>
    </div>
  );
}