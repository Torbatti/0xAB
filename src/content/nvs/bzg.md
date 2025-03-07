---
title: "بازگویی داده | Data Replication"
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

</style>

اطلاعات و داده ها , خواه و ناخواه در حال از بین رفتن و ایجاد شدن هستند.


<div class="custom-bazgooii-ssd">

۰.۰۳۱% از حافظه های SSD در سال خطاهایی در بخش های داخلی نشان میدهند.

۰.۰۲۳٪ از حافظه های SSD در سال فاسد میشوند یا ورودی و خروجی I/O را اشتباه هدایت میکنند.

</div>

[^1]
<span class="small-span">
تحقیق و بررسی به عمل آمده درباره از دست رفتن داده ها از روی حافظه های نوع ssd
</span>




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