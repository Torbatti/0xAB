---
title: "بازگویی | Replication"
description: "نویسه ای درباره ی مشکلات موجود و راه حل های بوجود آمده برای حل آن ها در بازگویی داده های سامانه های اطلاعاتی."
pubDate: "14031217"
updatedDate: "14031218"
version: "آزمایشی"
---
<style>
    .custom-bazgooii-ssd{
        display:grid;
        grid-template-columns: 1fr 1fr;
        gap:1rem;
        padding:.5rem;
    }
    @media screen and (max-width: 540px) {
        .custom-bazgooii-ssd{
            grid-template-columns: 1fr;
        }
    }
    .custom-bazgooii-ssd p{
        padding:.75rem;
        border:2px solid var(--text);
        border-radius:.75rem;
    }
    .small-span{font-size:small;}

    .small-htab{padding:.5rem 0;}

</style>


# بازگویی
بازگویی در حوزه کامپیوتر اشاره به نگهداری چند نسخه از داده , پروسه و یا منباع برای اطمینان حاصل شدن از سازگاری در سراسر قسمت های جایگزین را دارد.


Data replication is the process of creating and maintaining multiple copies of the same data in different locations as a way of ensuring data availability, reliability and resilience across an organization.

This fundamental technique spans databases, file systems, and distributed systems, serving to improve availability, fault-tolerance, accessibility, and performance.

Through replication, systems can continue operating when components fail (failover), serve requests from geographically distributed locations, and balance load across multiple machines.
The challenge lies in maintaining consistency between replicas while managing the fundamental tradeoffs between data consistency, system availability, and network partition tolerance – constraints known as the CAP theorem.[2]


# Active / Passive replication
Active replication, which is performed by processing the same request at every replica

Passive replication, which involves processing every request on a single replica and transferring the result to the other replicas


# Synchronous / Asynchronous data replication
Synchronous data replication means the data is constantly copied to the main server and all replica servers simultaneously.

Asynchronous data replication means that data is first copied to the main server and only then copied to replica servers in batches.

Although synchronous replication ensures no data is lost, asynchronous replication requires substantially less bandwidth and is less expensive.


اطلاعات و داده ها , خواه و ناخواه در حال از بین رفتن و ایجاد شدن هستند.


<div class="custom-bazgooii-ssd">

۰.۰۳۱% از حافظه های SSD در سال خطاهایی در بخش های داخلی نشان میدهند.

۰.۰۲۳٪ از حافظه های SSD در سال فاسد میشوند یا ورودی و خروجی I/O را اشتباه هدایت میکنند.

</div>

[^1]
<span class="small-span">
تحقیق و بررسی به عمل آمده درباره از دست رفتن داده ها از روی حافظه های نوع ssd
</span>

<div class="small-htab">

این اعداد شاید کوچک به نظر برسند اما استفاده از چند حافظه احتمال از دست دادن اطلاعات را افزایش میدهد

</div>

# بازگویی داده در سطح سخت افزاری
Hardware -> Raid

# بازگویی داده در سطح فایل سیستم
FS -> ZFS

# بازگویی داده در سطح نرم افزاری
BackUp

[^100] The 3-2-1 Backup Strategy

# بازگویی داده در سطح پروتوکل ارتباطی

[^101] Viewstamped Replication: A New Primary Copy Method to Support Highly-Available Distributed Systems
[^102] Viewstamped Replication Revisited















[^1]: https://www.usenix.org/system/files/fast20-maneas.pdf
[^100]: https://www.backblaze.com/blog/the-3-2-1-backup-strategy/
[^101]: https://pmg.csail.mit.edu/papers/vr.pdf
[^102]: https://pmg.csail.mit.edu/papers/vr-revisited.pdf