# 数据库操作
主要通过 Knex.js 连接 MySQL 数据库，进行数据库表的设计并实现用户角色信息的增删改查。

Knex.js是为Postgres，MSSQL，MySQL，MariaDB，SQLite3，Oracle和Amazon Redshift设计的“包含电池”SQL查询构建器，其设计灵活，便于携带并且使用起来非常有趣。它具有传统的节点样式回调以及用于清洁异步流控制的承诺接口，流接口，全功能查询和模式构建器，事务支持（带保存点），连接池 以及不同查询客户和方言之间的标准化响应。Knex的主要目标环境是Node.js，您需要安装该knex库，然后安装适当的数据库库：pg适用于PostgreSQL和Amazon Redshift，mysql适用于MySQL或MariaDB，sqlite3适用于SQLite3或mysql适用于MSSQL。

- [knex 官方文档](https://knexjs.org)
- [knex 中文文档](https://www.songxingguo.com/2018/06/30/knex.js-query/)

以下我们使用 knex 使用 mysql 链接操作数据库，使用前请确保安装以下工具：

- [XAMPP](https://www.apachefriends.org/zh_cn/index.html) 集成环境，用于启动数据库
- [navicat](http://www.navicat.com.cn/) - 数据库管理工具 - windows 用户安装
- [Sequel Pro](https://www.sequelpro.com/) - 数据库管理工具 - macOS 用户安装

XMAPP 默认用户名为：root , 密码为空 , host 为 127.0.0.1 。请确保 XAMPP 启动，然后使用数据库管理工具连接成功，接着进行以下步骤：

**注意：在 Mac 的新版本XAMPP中，host 未必为 127.0.0.1，可能是 192.168.64.2 ，需要按提示修改文件获取权限，同时设置新的用户和密码。** 
