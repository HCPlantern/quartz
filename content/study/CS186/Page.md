---
id: 20230904180848
title: Page
aliases:
  - page
  - pages
date: 2023-09-04 18:08
draft: false
tags:
  - database
---
In DBMS, pages are managed in memory by **buffer manager** or managed on disk by the **disk space manager**. Unit of accesses to physical disk is the page.

See also: [[Relationship Between Database Page and OS Page]]

### Page header

Header used to keep track of records in the page. 
> [!info] Header may contain fields: 
> - Number of records in the page
> - Pointer to segment of free space in the page
> - Bitmap indicating which parts of the page are in use
