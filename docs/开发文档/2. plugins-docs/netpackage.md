---
sidebar_position: 3
title: 2.3 上报数据
---

## `GroupMessage`群聊消息
```python
class GroupMessage(MessagePackage):  # 群消息
    message_type: str
    sub_type: str
    user_id: int
    message_id: int
    message: str
    raw_message: str
    font: int

    group_id: int
    anonymous: None = None  # 匿名消息字段，未测试，如果没有就是None
    sender: GroupSender
    message_seq: int

```
- #### GroupSender
___

## `PrivateMessage`私聊消息
```python
class PrivateMessage(MessagePackage):  # 私聊消息
    message_type: str
    sub_type: str
    user_id: int
    message_id: int
    message: str
    raw_message: str
    font: int

    target_id: int
    sender: PrivateSender
    temp_source: int = None
```
- #### PrivateSender
