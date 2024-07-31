import { useEffect, useState } from "react";
import { useAuth } from "../../providers/AuthProvider";
import getInsights from "../container/GetInsights";

interface InsightData {
    data: any[]; 
}

export default function InsightsComponent() {
    const [links, setLinks] = useState<InsightData | null>(null); 
    const [counts, setCounts] = useState<{ trueCount: number; falseCount: number }>({ trueCount: 0, falseCount: 0 });
    const { token } = useAuth();

    useEffect(() => {
        const fetchLinks = async () => {
            try {
                if (token) {
                    const data = await getInsights(token);
                    setLinks(data);
                }
            } catch (error) {
                console.error("An error has occurred", error);
            }
        };

        fetchLinks();
    }, [token]);

    useEffect(() => {
        if (links && links.data) {
            const data = links.data;
            const counts = data.reduce((acc, e) => {
                if (e.isPublic) {
                    acc.trueCount += 1;
                } else {
                    acc.falseCount += 1;
                }
                return acc;
            }, { trueCount: 0, falseCount: 0 });
            
            setCounts(counts);
        }
    }, [links]);

    return (
        <div className="sm:col-span-12 md:col-span-8 grid grid-cols-12 gap-2 [&_div]:p-2 [&_div]:bg-slate-50 [&_div]:shadow-lg [&_div]:shadow-slate-800 [&_div]:rounded-lg [&_div]:border-t-8 [&_div]:border-y-purple-700">
            <div className="sm:col-span-12 md:col-span-4 text-black">
                <h3 className="text-2xl text-center font-bold">
                    <i className="fa-solid fa-link"></i> {links ? links.data.length : 0} links
                </h3>
                <p className="text-lg text-center">
                    Public: {counts.trueCount}, Private: {counts.falseCount}
                </p>
            </div>
        </div>
    );
}
