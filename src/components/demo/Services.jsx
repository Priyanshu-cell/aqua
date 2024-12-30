import React from "react";
import itemData from "../../data/items.json";

import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "../ui/button";
import { Element } from "react-scroll";
const Services = () => {
  return (
    <Element name="consultancy">
      <div className="p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 ">
          {itemData.map((item) => (
            <Card
              key={item.id}
              className="w-full hover:bg-slate-100 hover:cursor-pointer"
            >
              <CardHeader>
                <div>
                  <CardTitle>{item.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p>{item.description}</p>
              </CardContent>
              <CardFooter>
                <a
                  href="tel:+66956943229"
                  onClick={(e) => {
                    e.preventDefault();
                    if (
                      window.confirm("This will dial +66956943229. Proceed?")
                    ) {
                      window.location.href = "tel:+66956943229";
                    }
                  }}
                >
                  <Button className="flex items-center space-x-2">
                    <Avatar className="w-6 h-6">
                      <AvatarImage
                        src="/logo/whatsapp.webp"
                        alt="WhatsApp logo"
                      />
                    </Avatar>
                    <span>Call Now</span>
                  </Button>
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </Element>
  );
};
export default Services;
