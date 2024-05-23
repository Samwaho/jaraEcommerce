import { CalendarDaysIcon, TagsIcon } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";

type Props = {
  title: string;
  price: string;
  days: string;
  ads: string;
};
const PricingCard = ({ title, price, days, ads }: Props) => {
  return (
    <div className="p-4">
      <Card className="w-[150px] mx-auto max-w-md bg-white text-gray-900 shadow-lg rounded-2xl dark:bg-gray-950 dark:text-gray-50">
        <CardHeader className="bg-gradient-sky rounded-t-2xl py-2 text-center">
          <CardTitle className="text-xl font-bold">{title}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 px-2 py-4">
          <div className="flex items-baseline justify-center gap-2">
            <span className="text-lg font-bold">Ksh.{price}</span>
            <span className="text-gray-500">/m</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <TagsIcon className="h-6 w-6 fill-sky-500" />
            <span className="text-md font-bold">{ads} Ads</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <CalendarDaysIcon className="h-6 w-6 fill-sky-500" />
            <span className="text-md font-bold">{days}</span>
          </div>
        </CardContent>
        <CardFooter className="bg-gray-100 px-2 py-2 rounded-b-2xl">
          <Button className="bg-slate-800 rounded-xl p-2 mx-auto h-4">
            Subscribe
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default PricingCard;
