import { Spinner } from "@/components/ui/spinner";

const loading = () => {
  return (
    <div className="w-full min-h-[60vh] flex items-center justify-center gap-2">
      <Spinner /> Loading...
    </div>
  );
};
export default loading;
