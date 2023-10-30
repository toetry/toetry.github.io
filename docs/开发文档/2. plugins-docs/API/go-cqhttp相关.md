---
sidebar_position: 9
---

## Go-CqHttp 相关















### 获取 Cookies

::: warning 注意
该 API 暂未被 go-cqhttp 支持, 您可以提交 pr 以使该 API 被支持
[提交 pr](https://github.com/Mrs4s/go-cqhttp/compare)
:::

终结点：`get_cookies`

**参数**

| 字段名 | 数据类型 | 默认值 | 说明 |
| ----- | ------- | ----- | --- |
| `domain` | string | 空 | 需要获取 cookies 的域名 |

**响应数据**

| 字段名 | 数据类型 | 说明 |
| ----- | ------- | --- |
| `cookies` | string | Cookies |

### 获取 CSRF Token

::: warning 注意
该 API 暂未被 go-cqhttp 支持, 您可以提交 pr 以使该 API 被支持
[提交 pr](https://github.com/Mrs4s/go-cqhttp/compare)
:::

终结点：`get_csrf_token`

::: tip 提示
该 API 无需参数
:::

**响应数据**

| 字段名 | 数据类型 | 说明 |
| ----- | ------- | --- |
| `token` | int32 | CSRF Token |

### 获取 QQ 相关接口凭证

::: warning 注意
该 API 暂未被 go-cqhttp 支持, 您可以提交 pr 以使该 API 被支持
[提交 pr](https://github.com/Mrs4s/go-cqhttp/compare)
:::

::: tip 提示
即上面两个接口的合并
:::

终结点：`get_credentials`

**参数**

| 字段名 | 数据类型 | 默认值 | 说明 |
| ----- | ------- | ----- | --- |
| `domain` | string | 空 | 需要获取 cookies 的域名 |

**响应数据**

| 字段名 | 数据类型 | 说明 |
| ----- | ------- | --- |
| `cookies` | string | Cookies |
| `csrf_token` | int32 | CSRF Token |



### 获取版本信息

终结点：`get_version_info`

::: tip 提示
该 API 无需参数
:::

**响应数据**

| 字段名 | 数据类型   | 默认值          | 说明 |
| ----- |--------|--------------| ---- |
| `app_name` | string | `go-cqhttp`  | 应用标识, 如 `go-cqhttp` 固定值 |
| `app_version` | string |              | 应用版本, 如 `v0.9.40-fix4` |
| `app_full_name` | string |              | 应用完整名称 |
| `protocol_name` | int    | 6            |  |
| `protocol_version` | string | `v11`        | OneBot 标准版本 固定值 |
| `coolq_edition` | string | `pro`        | 原Coolq版本 固定值 |
| `coolq_directory` | string |              |  |
| `go-cqhttp` | bool   | true         | 是否为go-cqhttp 固定值 |
| `plugin_version` | string | `4.15.0`     | 固定值 |
| `plugin_build_number` | int    | 99           | 固定值 |
| `plugin_build_configuration` | string | `release`    | 固定值 |
| `runtime_version` | string |              |  |
| `runtime_os` | string |              |  |
| `version` | string |              | 应用版本, 如 `v0.9.40-fix4` |



### 获取状态

终结点: `get_status`

**响应数据**

| 字段              | 类型       | 说明                            |
| ----------------- | ---------- | ------------------------------- |
| `app_initialized` | bool       | 原 `CQHTTP` 字段, 恒定为 `true` |
| `app_enabled`     | bool       | 原 `CQHTTP` 字段, 恒定为 `true` |
| `plugins_good`    | bool       | 原 `CQHTTP` 字段, 恒定为 `true` |
| `app_good`        | bool       | 原 `CQHTTP` 字段, 恒定为 `true` |
| `online`          | bool       | 表示BOT是否在线                 |
| `good`            | bool       | 同 `online`                     |
| `stat`            | Statistics | 运行统计                        |

**Statistics**


| 字段              | 类型   | 说明             |
| ----------------- | ------ | ---------------- |
| `packet_received`  | uint64 | 收到的数据包总数 |
| `packet_sent`      | uint64 | 发送的数据包总数 |
| `packet_lost`      | uint32 | 数据包丢失总数   |
| `message_received` | uint64 | 接受信息总数     |
| `message_sent`     | uint64 | 发送信息总数     |
| `disconnect_times` | uint32 | TCP 链接断开次数 |
| `lost_times`       | uint32 | 账号掉线次数     |
| `last_message_time` | int64  | 最后一条消息时间 |

::: warning 注意
所有统计信息都将在重启后重置
:::



### 重启 Go-CqHttp

::: danger 注意
该 API 由于技术原因，自 1.0.0 版本已被移除，目前暂时没有再加入的计划
[#1230](https://github.com/Mrs4s/go-cqhttp/issues/1230)
:::

终结点：`set_restart`

由于重启 go-cqhttp 实现同时需要重启 API 服务, 这意味着当前的 API 请求会被中断, 因此需要异步地重启, 接口返回的 `status` 是 `async`。

**参数**

| 字段名 | 数据类型 | 默认值 | 说明 |
| ----- | ------- | ----- | --- |
| `delay` | number | `0` | 要延迟的毫秒数, 如果默认情况下无法重启, 可以尝试设置延迟为 2000 左右 |

::: tip 提示
该 API 无响应数据
:::



### 清理缓存

::: warning 注意
该 API 暂未被 go-cqhttp 支持, 您可以提交 pr 以使该 API 被支持
[提交 pr](https://github.com/Mrs4s/go-cqhttp/compare)
:::

终结点：`clean_cache`

用于清理积攒了太多的缓存文件。

::: tip 提示
该 API 无需参数也没有响应数据
:::

<span id="asdf">asdf</span>
### asdfg


### 重载事件过滤器

终结点：`reload_event_filter`

**参数**

| 字段名  | 数据类型 | 默认值 | 说明 |
| -----  | -------- | ----- | ---- |
| `file` | string | - | 事件过滤器文件 |

::: tip 提示
该 API 没有响应数据
:::

### 下载文件到缓存目录

终结点: `download_file`

**参数**

| 字段       | 类型   | 说明                      |
| ---------- | ------ | ------------------------- |
| `url` | string  | 链接地址                      |
| `thread_count` | int32  | 下载线程数            |
| `headers` | string or array  | 自定义请求头    |

**`headers`格式:**

字符串:

```
User-Agent=YOUR_UA[\r\n]Referer=https://www.baidu.com
```

::: tip 提示
`[\r\n]` 为换行符, 使用http请求时请注意编码
:::

JSON数组:

```json
[
    "User-Agent=YOUR_UA",
    "Referer=https://www.baidu.com"
]
```

**响应数据**

| 字段        | 类型       | 说明            |
| ---------- | ---------- | ------------ |
| `file`    | string       |  下载文件的*绝对路径*        |

::: tip 提示
通过这个API下载的文件能直接放入CQ码作为图片或语音发送

调用后会阻塞直到下载完成后才会返回数据，请注意下载大文件时的超时
:::



### 检查链接安全性

终结点：`check_url_safely`

**参数**

| 字段       | 类型   | 说明                      |
| ---------- | ------ | ------------------------- |
| `url` | string  | 需要检查的链接  |

**响应数据**

| 字段        | 类型       | 说明            |
| ---------- | ---------- | ------------ |
| `level`    | int       |  安全等级, 1: 安全 2: 未知 3: 危险  |



### 获取中文分词 ( 隐藏 API )

::: danger 警告
隐藏 API 是不建议一般用户使用的, 它们只应该在 OneBot 实现内部或由 SDK 和框架使用, 因为不正确的使用可能造成程序运行不正常。
:::

终结点: `.get_word_slices`

**参数**

| 字段      | 类型   | 说明 |
| --------- | ------ | ---- |
| `content` | string | 内容 |

**响应数据**

| 字段     | 类型     | 说明 |
| -------- | -------- | ---- |
| `slices` | string[] | 词组 |



### 对事件执行快速操作 ( 隐藏 API )

::: warning 注意
隐藏 API 是不建议一般用户使用的, 它们只应该在 OneBot 实现内部或由 SDK 和框架使用, 因为不正确的使用可能造成程序运行不正常。
:::

终结点：`.handle_quick_operation`

关于事件的快速操作, 见 [快速操作](../event/#快速操作)。

**参数**

| 字段名      | 数据类型 | 默认值 | 说明                                                        |
| ----------- | -------- | ------ | ----------------------------------------------------------- |
| `context`   | object   | -      | 事件数据对象, 可做精简, 如去掉 `message` 等无用字段         |
| `operation` | object   | -      | 快速操作对象, 例如 `{"ban": true, "reply": "请不要说脏话"}` |

::: tip 提示
该 API 没有响应数据
:::

