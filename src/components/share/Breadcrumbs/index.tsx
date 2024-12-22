

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator
} from "@/components/ui/breadcrumb"
import React from 'react'

export interface IBreadcrumbs {
  title: string,
  href?: string
}

interface IProps {
  breadcrumbs: IBreadcrumbs[]
}

function Breadcrumbs({ breadcrumbs }: IProps) {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        {
          breadcrumbs.map((breadcrumb: IBreadcrumbs, index: number) => (
            <React.Fragment key={breadcrumb.title}>
              <BreadcrumbItem key={breadcrumb.title}>
                <BreadcrumbLink className={`${index === breadcrumbs.length - 1 ? "text-main" : 'text-secondaryCustoms'} text-base	`} href={breadcrumb.href}>{breadcrumb.title}</BreadcrumbLink>
              </BreadcrumbItem >
              {index < breadcrumbs.length - 1 && <BreadcrumbSeparator />}
            </React.Fragment>
          ))
        }
      </BreadcrumbList>
    </Breadcrumb >
  )
}

export default Breadcrumbs