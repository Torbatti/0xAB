---
title: "تفاهم مدیریت انتقال"
description: "نویسه ای درباره ی مشکلات موجود و راه حل های بوجود آمده برای حل آن ها در بازگویی داده های سامانه های اطلاعاتی."
pubDate: "14040118"
updatedDate: ""
version: "آزمایشی"
---
<style>
    .transfer-data{
        position:relative;

        padding:1rem 0;
        display:flex;
        justify-content:center;
        align-items:center;
    }
    .transfer-data .sys{
        position:relative;
        z-index:0;

        width:36px;
        height:48px;
        border:2px solid var(--text);
        border-radius:.5rem;
    }
    .transfer-data .link{
        position:relative;
        z-index:0;

        width:128px;
        height:1px;
        background:black;
    }
    .transfer-data .data{
        position:absolute;

        top:calc(50% - .25rem);
        left:calc(50% - 72px);

        width:.5rem;
        height:.5rem;
        border-radius:.5rem;

        background:black;

        animation: 4s infinite normal slide-data;
    }
    @keyframes slide-data {
        0%,100% {
            left:calc(50% - 88px);
        }
        50%{
            left:calc(50% + 78px);
        }
    }
</style>

<div class="transfer-data">
    <div class="sys"></div>
    <div class="link"></div>
    <div class="sys"></div>
    <div class="data"></div>
</div>

اطلاعات بین سامانه ها از طریق تفاهم نامه هایی که مشخص شده اند انقال پیدا میکنند که معروف ترین آن ها 
HTTP (Hyper Text Transfer Protocol)
است که بر پایه 
TCP/IP (Transmission Control Protocol / Internet Protocol)
بنا شده است.






# منبع گان
- [Beej's Guide to Network Programming](https://beej.us/guide/bgnet/)
- [Beej's Guide to Network Concepts](https://beej.us/guide/bgnet0/)
- [TCP Server in Zig](https://www.openmymind.net/TCP-Server-In-Zig-Part-1-Single-Threaded/)
- [tcpipguide.com](http://www.tcpipguide.com/free/t_toc.htm)
- CompTIA Network+ All in one 8th edition book

# RFC های مرتبط
- [TCP 9293](https://datatracker.ietf.org/doc/html/rfc9293)