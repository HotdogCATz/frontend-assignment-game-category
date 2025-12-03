import Loader from "@/components/ui/loader";

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full">
      <Loader />
    </div>
  );
}
