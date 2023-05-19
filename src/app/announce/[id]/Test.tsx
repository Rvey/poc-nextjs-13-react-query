"use client"
import { getDataByID } from "@/query";
import { useQuery } from "@tanstack/react-query";

export default function Test({ id }: any) {
    const {data } = useQuery({
        queryKey: ["product", id],
        queryFn: () => getDataByID(id),
        staleTime: 1000 * 60,
    });
    return (
        <div>
            {JSON.stringify(data)}
            <h1>Test</h1>
        </div>
    )
}