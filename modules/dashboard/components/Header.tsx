"use client";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";

import { ButtonGroup } from "@/components/ui/button-group";
import { ArrowLeftIcon, ArrowRightIcon, Home } from "lucide-react";
import { useRouter } from "next/navigation";
import { Fragment } from "react/jsx-runtime";

type LinkType = {
  title: string;
  href: string;
};

type Props = {
  links?: LinkType[];
  currentPage: string;
};

function Header({ links = [], currentPage }: Props) {
  const router = useRouter();

  return (
    <header className=" bg-card ">
      <div className="container py-2 mx-auto flex justify-between items-center">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/dashboard">
                <Home className=" size-3" />
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            {links.map(({ title, href }: LinkType) => (
              <Fragment key={title}>
                <BreadcrumbItem>
                  <BreadcrumbLink className=" text-sm capitalize" href={href}>
                    {title}
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
              </Fragment>
            ))}
            <BreadcrumbItem>
              <BreadcrumbPage className=" text-sm capitalize">
                {currentPage}
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <ButtonGroup className="hidden sm:flex">
          <Button
            onClick={() => router.back()}
            className=" size-5"
            variant="outline"
            size="icon"
            aria-label="Go Back"
          >
            <ArrowLeftIcon className=" size-2" />
          </Button>
          <Button
            onClick={() => router.forward()}
            className=" size-5"
            variant="outline"
            size="icon"
            aria-label="Go Back"
          >
            <ArrowRightIcon className=" size-2" />
          </Button>
        </ButtonGroup>
      </div>
    </header>
  );
}

export default Header;