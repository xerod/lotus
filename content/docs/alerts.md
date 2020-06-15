---
description: ""
sidebar: "docs"
prev: "/docs/settings/"
---

import Alert from '~/components/Alert.vue'

# Alerts

the `p-alert`component is used to display important information to the user trough the use of contextual types icon and color.

### Example

<Alert title="Attention Needed" body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vulputate dolor eget enim congue, sit amet tristique leo efficitur." type="info" />

### Code

```js
<Alert
  title="Attention Needed"
  body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vulputate dolor eget enim congue, sit amet tristique leo efficitur."
  type="warning"
/>
```

### Slots

<div class="overflow-x-auto">
    <div class="table min-w-full shadow-sm overflow-hidden sm:rounded border border-ui-border">
        <table>
            <thead>
                <th>Property</th>
                <th>Type</th>
                <th>Default</th>
                <th>Accepted Value</th>
                <th>Description</th>
            </thead>
            <tbody>
                <tr>
                    <td>type</td>
                    <td>String</td>
                    <td>info</td>
                    <td>info, success, warning, danger</td>
                    <td>Type of alert</td>
                </tr>
            </tbody>
        </table>
    </div>
</div>
