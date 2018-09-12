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

    查询所有数据
    		SELECT * FROM table_name

    		实际使用中，并不推荐 *
    		SELECT column_name,column_name FROM table_name

    	别名
    		可以给 字段 和 表 加别名
    		SELECT column_name as c1,column_name as c2 FROM table_name as t WHERE t.column_name = val

    Node.js - mysql2
    		connection.query( SQL语句 )

    		返回值依据其操作来决定
    			- SELECT：[数据集合，字段集合]

    条件查询
    		SELECT column_name,column_name
    		FROM table_name
    		[WHERE Clause]
    	    WHERE 子句
    		WHERE condition1 [AND [OR]] condition2.....
    		操作符
    			=、<>,!=、>、<、>=、<=

    查询参数占位符
        	.query('SELECT ??,?? FROM ?? WHERE ?? = ?', ['id','username','users','id',1])
        		??：字段名、表名
        		?：值

    数量限制查询
    		SELECT column_name,column_name
    		FROM table_name
    		[LIMIT N]

    		N：数字，要限制的查询数据的最大条数

    查询偏移
    		SELECT column_name,column_name
    		FROM table_name
    		[LIMIT N] [OFFSET M]

    		M：数字，要偏移的数量值，从 0 开始

    		OFFSET必须与LIMIT一起使用，且LIMIT在前

    偏移与限制
    		SELECT column_name,column_name
    		FROM table_name
    		[LIMIT [M, ]N]

    		注意，这种写法偏移在前，限制在后，如果只有一个数字，默认为限制

    添加数据
    		INSERT INTO table_name ( field1, ...fieldN )
                           VALUES ( value1, ...valueN );
    	    Node.js - mysql2
    		connection.query('INSERT INTO `users` SET ?', {key:value,...})
    	    返回值依据其操作来决定
    		- INSERT INTO：[{affectedRows ,insertId}，undefined]


     /**
                * 查询数量限制
             * LIMIT - top 10
             * 查询偏移
             * OFFSET
             *
             * 分页:
             *  把一定的数据按照每页固定的条数去显示，我们需要首先定义每页显示多少
             *
             * 每页显示3条
             *  1 : 0 - 2
             *  2 : 3 - 5
             *  3 : 6 - 8
             * 每页显示 -> LIMIT
             * 当前的页码 -> OFFSET
             *
             * 如果页码从1开始算，那么对应的记录应该    LIMIT 3 OFFSET (页码-1 * 3)
             *
             * 总页码
     */

    更新数据
    		UPDATE table_name SET field1=value1;
    	Node.js - mysql2
    	返回值依据其操作来决定
    		- UPDATE：[{affectedRows ,insertId}，undefined]

    DELETE FROM table_name [WHERE];
    	Node.js - mysql2
    		connection.query('DELETE FROM `users` WHERE id=?', [1])
    	返回值依据其操作来决定
    		- INSERT INTO：[{affectedRows}，undefined]

    IN
    	多值匹配
    		SELECT column_name... FROM table_name  WHERE column_name IN (value1, value2...)
    	NOT IN
    		与 IN 相反

    BETWEEN
    		范围查询
    		SELECT column_name... FROM table_name  WHERE column_name BETWEEN value1 AND value2
    	    NOT BETWEEN
    		与 BETWEEN 相反

    ORDER BY
    		按照某个字段某种规则进行排序
    		SELECT column_name... FROM table_name  ORDER BY column_name1 DESC, column_name2 ASC
    		DESC：降序
    		ASC：升序，默认

    函数
    		SQL 也提供了一些内置函数，以便对数据进行一些常规操作
    			- 聚合函数
    				计算从列中取得的值，返回一个单一的值，如：COUNT、SUM、MAX、MIN
    			- 标量函数
    				基于输入值，返回一个单一的值，如：UCASE、LCASE、NOW

    SUM()
    		返回数值列的总数
    		SELECT SUM(column_name) FROM table_name

    VG()
    		返回数值列的平均值
    		SELECT AVG(column_name) FROM table_name

    MAX()
    		返回指定列的最大值
    		SELECT MAX(column_name) FROM table_name

    MIN()
    		返回指定列的最小值
    		SELECT MIN(column_name) FROM table_name

    UCASE()
    		把字段的值转换为大写
    		SELECT UCASE(column_name) FROM table_name

    LCASE()
    		把字段的值转换为小写
    		SELECT LCASE(column_name) FROM table_name

    MID()
    		从文本字段中提取指定字符
    		SELECT MID(column_name,start[,length]) FROM table_name
    			start：从1开始计算

    LENGTH()
    		返回文本字段中值的长度
    		SELECT LENGTH(column_name) FROM table_name

    NOW()
    		返回当前系统的日期和时间
    		SELECT NOW() FROM table_name

    GROUP BY
    		用于结合聚合函数，根据一个或多个列对结果集进行分组
    		SELECT column_name... FROM table_name  GROUP BY column_name1

    存储引擎
    		数据在计算机上存储的方式
    		MySQL常见存储引擎：InnoDB、MyISAM等
    			- InnoDB的优势在于提供了良好的事务处理、崩溃修复能力和并发控制。缺点是读写效率较差，占用的数据空间相对较大
    			- MyISAM的优势在于占用空间小，处理速度快。缺点是不支持事务的完整性和并发性

    字符集、编码
    		指数据库存储的数据的编码
    			- utf8mb4：支持更多的unicode字符（四字节）
    	数据校对
    		数据库除了要存储数据，还要对数据进行排序，比较等操作，不同的校对规则会有不同的结果
    			- utf8mb4_unicode_ci：基于标准的Unicode来排序和比较，能够在各种语言之间精确排序

    数据类型
    		数据存储的类型
    			数字类型：INTEGER, INT, SMALLINT, TINYINT, MEDIUMINT, BIGINT, DECIMAL, NUMERIC, FLOAT, DOUBLE
    			日期时间类型：DATE, DATETIME, TIMESTAMP, TIM, YEAR
    			字符串类型：CHAR, VARCHAR, BINARY, VARBINARY, BLOB, TEXT, ENUM, SET

    主键
    		表中的一个或多个字段，它的值用于唯一地标识表中的某一条记录，用来保持数据的完整性
    			- 一个表只能有一个主键
    			- 主键可以是一个字段，也可以由多个字段组成
    			- 主键值不能重复
    			- 加快对数据的操作
    自增
    		auto_increment
    			添加数据的时候由数据库自动设置的值			一般在设计表的时候会设置一个自动增加字段作为主键

    索引
    		对表中一列或多列（注意是列）的值进行排序的一种结构，使用索引课快速访问表中特定的信息
    		加快对表中记录的查找或排序
