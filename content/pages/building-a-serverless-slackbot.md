---
title: 'Building a Serverless Slack Chatbot'
slug: 'building-a-serverless-slackbot'
description: ''
tableOfContents: true
keywords: 
    - chatbot
    - serverless
    - slack
---
# Introduction

I made a bot for Slack during my free time. It's at a state where I'm pretty happy with it, so I decided to share my project. Here's the <a href="https://github.com/deslee/punbot" target="_blank" rel="noopener">git repository</a>.

# Architecture

![Picture of the Punbot architecture](/punbot/punbot.svg)

The four main components are:

1. Slack itself
2. A serverless function using Express to handle slack events / authentication
3. A serverless function on a schedule to post a "pun of the day" message to certain channels.
4. A MongoDB database to store slack workspace tokens (used to post in channels as Punbot), "daily pun" subscriptions, and a list of ~5000 puns to support full text search.

```javascript
var s = "JavaScript syntax highlighting";
alert(s);
```

```python
s = "Python syntax highlighting"
print s
```

```
No language indicated, so no syntax highlighting.
But let's throw in a <b>tag</b>.
```

# Project setup

## Build tools

## Dependency Injection

## Module Organization

## Unit Tests

# Takeaways