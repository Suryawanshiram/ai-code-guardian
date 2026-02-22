"use client";

import { trpc } from "@/lib/trpc";
import { Badge } from "./ui/badge";
import { Skeleton } from "./ui/skeleton";

export function HealthCheck() {
    const {data,isLoading,error} = trpc.health.useQuery();

    if(isLoading) return <Skeleton className="w-24 h-6" />;

    if(error) return <Badge variant="destructive">API Error</Badge>;

    return (
        <Badge variant="secondary">
           API: {data?.status} 
        </Badge>
    )
}