import { Search, Share } from "lucide-react";

import { Button } from "@/components/ui/button";

import { Input } from "@/components/ui/input";

function UpNav() {
  return (
    <div className="sticky top-0 z-10 flex h-[53px] items-center gap-1 border-b bg-background px-4">
      <h1 className="text-xl font-semibold">Aacharya</h1>
      <div className="relative ml-auto flex-1 md:grow-0">
        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Search..."
          className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[320px]"
        />
      </div>
      <Button variant="outline" size="sm" className="ml-auto gap-1.5 text-sm">
        <Share className="size-3.5" />
        Share
      </Button>
    </div>
  );
}

export default UpNav;