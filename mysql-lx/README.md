#数据库
    --修改用户密码的命令
    mysqladmin -uroot -proot123 password mysql123

    --登录mysql数据库的命令
    mysql -uroot -proot123

    --显示数据库的命令
    show databases;

    --使用数据库的命令
    use mysql;

    --显示当前连接的数据库
    select database();

    --显示当前服务器的版本
    select version();

    --显示当前日期时间
    select now();

    --显示当前用户
    show user();

    --创建数据库
    create database test1;

    create database if not exists test2 character set utf8;

    --修改数据库的编码格式
    alter database test2 character set latin1;

    --查看数据库的编码格式
    show variables like 'character%';

    --删除数据库
    drop database test2;


