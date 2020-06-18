---
description: ""
sidebar: "docs"
prev: "/docs/settings/"
---

import Alerts from '../playground/alerts.vue'
import data from '../data/alerts.json'

# Alerts

the `p-alert` component is used to display important information to the user trough the use of contextual types icon and color.

<Alerts />

### Code

```js
<p-alert
  title="Attention Needed"
  body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vulputate dolor eget enim congue, sit amet tristique leo efficitur."
  type="danger"
/>
```

### Slots

<div class="overflow-x-auto">
    <div class="table min-w-full shadow-sm overflow-hidden sm:rounded border border-ui-border">
        <table>
            <thead>
                <th class="text-left">Property</th>
                <th class="text-center">Type</th>
                <th class="text-center">Default</th>
                <th class="text-center">Accepted Value</th>
                <th class="text-center">Description</th>
            </thead>
            <tbody>
                <tr v-for="(value,index) in data.props" :key="index">
                    <td class="text-left">{{ value.property }}</td>
                    <td class="text-center">
                        <code>{{ value.type }}</code>
                    </td>
                    <td class="text-center">{{ value.default }}</td>
                    <td class="flex flex-wrap text-center">
                        <div 
                        v-for="(value,index) in value.accepted_value" :key="index"
                        class="mr-1 mt-2"
                        >
                            <code>{{ value }}</code>
                        </div>
                    </td>
                    <td class="text-center">{{ value.description }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</div>
