export default function insightsAnalyzer(data: any){
    const links = data.data;
    const resume = {};

    resume["count"] = data.length;


    return resume;
}