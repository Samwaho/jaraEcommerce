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
    <Card className="w-full max-w-md bg-white text-gray-900 shadow-lg rounded-2xl dark:bg-gray-950 dark:text-gray-50">
      <CardHeader className="bg-gradient-to-tr from-sky-500 rounded-t-2xl px-8 py-2 text-center">
        <CardTitle className="text-3xl font-bold">{title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6 px-8 py-10">
        <div className="flex items-baseline justify-center gap-2">
          <span className="text-3xl font-bold">Ksh.{price}</span>
          <span className="text-gray-500">/month</span>
        </div>
        <div className="flex items-center justify-center gap-2">
          <TagsIcon className="h-6 w-6 fill-[#0ea5e9]" />
          <span className="text-xl font-bold">{ads} Ads</span>
        </div>
        <div className="flex items-center justify-center gap-2">
          <CalendarDaysIcon className="h-6 w-6 fill-[#0ea5e9]" />
          <span className="text-xl font-bold">{days} Days</span>
        </div>
      </CardContent>
      <CardFooter className="bg-gray-100 px-8 py-6 rounded-b-2xl dark:bg-gray-800">
        <Button className="w-full">Subscribe</Button>
      </CardFooter>
    </Card>
  );
};

export default PricingCard;
