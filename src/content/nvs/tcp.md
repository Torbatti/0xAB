---
title: "بی‌نهایت و فراتر از تَفما | تی سی پی"
description: "نویسه ای درباره ی تفاهم نامه مدیریت انتقال."
pubDate: "14040118"
updatedDate: ""
version: "آزمایشی"
---
دریافت پی دی اف: [تی سی پی](https://www.mediafire.com/file/6yq61s1lrp7b638/TCP.pdf/file)

# تَفما  (تفاهم مدیریت انتقال) | تی سی پی چیست

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

        font-size:small;

        padding:.5rem 1rem;

        border:2px solid var(--text);
        border-radius:.5rem;
    }
    .transfer-data .link{
        position:relative;
        z-index:0;

        width:128px;
        height:1px;
        background: var(--text);
    }
    .transfer-data .data{
        position:absolute;

        top:calc(50% - .25rem);
        left:calc(50% - 62px);

        width:.5rem;
        height:.5rem;
        border-radius:.5rem;

        background:black;

        animation: 4s infinite normal slide-data;
    }
    @keyframes slide-data {
        0%,100% {
            left:calc(50% - 65px);
        }
        50%{
            left:calc(50% + 67px);
        }
    }
</style>

<div class="transfer-data">
    <div class="sys">پیش آور</div>
    <div class="link"></div>
    <div class="sys">خواهشگر</div>
    <div class="data"></div>
</div>

عامه ی داده ها بین رایانه ها از طریق تفاهم هایی مشخص و بین المللی جا به جا میشوند.
تارنمایی که مشاهده میکند از این قاعده مستثنی نیست.
مرورگرها برای ارتباط با تارنما ها معمولا از تفاهم اچ تی تی پی 
[^1] 
یا نسخه ایمن شده آن اچ تی تی پی اس
[^2]
استفاده میکنند.
تفاهم اچ تی تی پی بر پایه تفاهم ای دیگر به اسم
تی سی پی
[^3]
بنا شده که پایه و اساس بسیاری تفاهم های دیگر است.



# تَفدَنگ (تفاهم داده نگار کاربر) | یو دی پی چیست

# تفاوت تَفما و تَفدَنگ | تی سی پی و یو دی پی

# تَفما و تَفتَک (تفاهم تارکده) | تی سی پی و آی پی 

# هدر تفتک

# هدر تَفما





# 


<style>
    #tcp-table{
        margin:auto;
        direction:ltr;
        border-spacing: 2rem .5rem ;
        font-size:small;
    }

    #tcp-table td,#tcp-table th{padding:.5rem 1.5rem;}

    #tcp-table td
    {
        position:relative;
        text-align:center;
        border:2px solid var(--text);
        border-radius:.5rem;
    }
    #tcp-table tr:nth-child(3) td:nth-child(2),
    #tcp-table tr:nth-child(4) td:nth-child(2){
        border:2px solid transparent;
    }

    #tcp-table tr:nth-child(5) td:first-child::after,
    #tcp-table tr:nth-child(6) td:first-child::after,
    #tcp-table tr:nth-child(7) td:first-child::after
    {
        content:" ";

        position:absolute;
        top:.75rem;

        width:.5rem;
        height:.5rem;
        border-radius:.5rem;

        background: var(--text);
    }

    #tcp-table tr:nth-child(5) td:first-child::after,
    #tcp-table tr:nth-child(7) td:first-child::after
    {
        left:calc(6rem);
        /* left:calc(8.15rem); */

        animation: 3s infinite normal tcptable-data-forward;
    }
    #tcp-table tr:nth-child(6) td:first-child::after{
        /* left:calc(6rem); */
        left:calc(8.15rem);

        animation: 3s infinite normal tcptable-data-back;
    }
    @keyframes tcptable-data-forward {
        0%,100% {
            left:calc(6rem);
        }
        50%{
            left:calc(8.15rem);
        }
    }
    @keyframes tcptable-data-back {
        0%,100% {
            left:calc(8.15rem);
        }
        50%{
            left:calc(6rem);
        }
    }

    #tcp-table tr:nth-child(5) td:first-child::before,
    #tcp-table tr:nth-child(6) td:first-child::before,
    #tcp-table tr:nth-child(7) td:first-child::before
    {
        content:" ";

        position:absolute;
        top:1rem;
        left:calc(6.2rem);


        width:2.2rem;
        height:1px;
        background: var(--text);

    }


</style>

<table id="tcp-table">
  <tr>
    <th>Server</th>
    <th>Client</th>
  </tr>
  <tr>
    <td>socket( )</td>
    <td>socket( )</td>
  </tr>
  <tr>
    <td>bind( )</td>
    <td></td>
  </tr>
  <tr>
    <td>listen( )</td>
    <td></td>
  </tr>
  <tr>
    <td>accept( )</td>
    <td>connect( )</td>
  </tr>
  <tr>
    <td>recv( )</td>
    <td>send( )</td>
  </tr>
  <tr>
    <td>send( )</td>
    <td>recv( )</td>
  </tr>
  <tr>
    <td>close( )</td>
    <td>close( )</td>
  </tr>
</table> 



```c
// server.c
#include <stdio.h>      // printf
#include <netinet/in.h> // sockaddr_in, INADDR_ANY
#include <sys/socket.h> // socket, bind, listen, accept, AF_INET, SOCK_STREAM
#include <sys/types.h>  // htonl, htons, socklen_t
#include <unistd.h>     // read, write, close

// This is used to pre-allocate the char array size
// For our use case, we will accept that it's not possible to read messages larger than this
#define MAX_MESSAGE_SIZE 256

int main(void)
{
  // Initialize the details of the server socket
  struct sockaddr_in server_sockaddr_in;

  // Define socket family AF_INET = internetwork: UDP, TCP, etc.
  server_sockaddr_in.sin_family = AF_INET;

  // https://linux.die.net/man/3/htonl
  // The htonl() function converts the unsigned integer hostlong from host byte order to network byte order.
  server_sockaddr_in.sin_addr.s_addr = htonl(INADDR_ANY);

  // Defines the port we want to open this socket on
  const int port = 8080;
  // The htons() function converts the unsigned short integer hostshort from host byte order to network byte order.
  server_sockaddr_in.sin_port = htons(port);

  // https://man7.org/linux/man-pages/man2/socket.2.html
  // creates an endpoint for communication and returns a file descriptor that refers to that endpoint
  // SOCK_STREAM defines that this should communicate over TCP
  int socket_file_descriptor = socket(AF_INET, SOCK_STREAM, 0);

  // https://man7.org/linux/man-pages/man2/bind.2.html
  // bind() assigns the address specified by server_sockaddr_in to the socket socket_file_descriptor
  bind(socket_file_descriptor, (struct sockaddr *)&server_sockaddr_in, sizeof(server_sockaddr_in));

  // https://man7.org/linux/man-pages/man2/listen.2.html
  // listen() marks the socket referred to by sockfd as a passive socket
  // the second parameter (5) defines the maximum length to which the queue of pending connections for socket_file_descriptor may grow
  listen(socket_file_descriptor, 5);

  struct sockaddr_in client_sockaddr_in;
  socklen_t len = sizeof(client_sockaddr_in);

  // https://man7.org/linux/man-pages/man2/accept4.2.html
  // accept() extracts the first connection request on the queue of pending connections for the listening socket
  // The address info from the client will be stored in client_sockaddr_in
  int connection_file_descriptor = accept(socket_file_descriptor, (struct sockaddr *)&client_sockaddr_in, &len);

  char buffer[MAX_MESSAGE_SIZE] = {};

  // https://man7.org/linux/man-pages/man2/read.2.html
  // read() attempts to read up to MAX_MESSAGE_SIZE bytes from file descriptor connection_file_descriptor into buffer
  read(connection_file_descriptor, buffer, sizeof(buffer));
  printf("%s", buffer);

  char status = 0;
  // https://man7.org/linux/man-pages/man2/write.2.html
  // write(fd, buf, count) writes up to count bytes from the buffer starting at buf to the file referred to by the file descriptor fd
  // In this case we simply send a single byte 0 to indicate we have received the message
  write(connection_file_descriptor, &status, 1);

  // https://man7.org/linux/man-pages/man2/close.2.html
  // close() closes a file descriptor, so that it no longer refers to any file and may be reused
  close(socket_file_descriptor);

  return 0;
}
```

```sh
# using zig tool chain:
zig cc server.c -o server

# using gcc tool chain:
gcc server.c -o server

# using clang tool chain:
cc server.c -o server
```


# منبع گان
- [Beej's Guide to Network Programming](https://beej.us/guide/bgnet/)
- [Beej's Guide to Network Concepts](https://beej.us/guide/bgnet0/)
- [TCP Server in Zig](https://www.openmymind.net/TCP-Server-In-Zig-Part-1-Single-Threaded/)
- [tcpipguide.com](http://www.tcpipguide.com/free/t_toc.htm)
- CompTIA Network+ All in one 8th edition book
- [tcpserver.c - A simple TCP echo server](https://www.cs.cmu.edu/afs/cs/academic/class/15213-f99/www/class26/tcpserver.c)
- [How to Build a Simple TCP Server in C](https://devtails.xyz/@adam/how-to-build-a-simple-tcp-server-in-c)


# RFC های مرتبط
- [TCP 9293](https://datatracker.ietf.org/doc/html/rfc9293)



[^1]: [HTTP \(Hyper Text Transfer Protocol\)](https://en.wikipedia.org/wiki/HTTP)
[^2]: [HTTPS \(Hyper Text Transfer Protocol Secure\)](https://en.wikipedia.org/wiki/HTTPS)
[^3]: [TCP \(Transmission Control Protocol\)](https://en.wikipedia.org/wiki/Transmission_Control_Protocol)
