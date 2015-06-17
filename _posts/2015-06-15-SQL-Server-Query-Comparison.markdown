---
layout: post
title:  "MSSMS Query Debugging"
date:   2015-06-15
tags: ['MSSMS','SQL']
---

两个在MSSMS中进行query测试的一些技巧。

###查看query运行时间，以及IO状态

如果有缓存，则会影响到结果。

```sql
SET STATISTICS IO ON
SET STATISTICS TIME ON
```

###MSSMS Excution Plan

1. 在Query菜单中，打开Estimated Execution Plan 或者 Actual Execution Plan
2. 快捷键Ctrl+L，直接查看Estimated Execution Plan, 不过如果query中有Temp Table 则只能查看Actual Execution Plan

