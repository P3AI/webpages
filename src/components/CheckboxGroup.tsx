import {Checkbox} from "@cloudscape-design/components";
import {useState} from "react";

export interface CheckboxItem {
    key: string;
    text: string;
    checked: boolean;
}

export function CheckboxGroupIsEmpty(items: CheckboxItem[]): boolean {
    for(const item of items) {
        if(item.checked) return false
    }
    return true
}

export function CheckboxGroup(props: {content: CheckboxItem[], setContent: (content: CheckboxItem[]) => void}): JSX.Element {

    const [contentValue, setContentValue] = useState<CheckboxItem[]>(props.content)

    return <div>
        {
            contentValue.map(
                item => <Checkbox checked={item.checked}
                                  onChange={({detail}) => {
                                      item.checked = detail.checked
                                      props.setContent(props.content)
                                      setContentValue([...contentValue])
                                  }}
                                  key={item.key}
                >
                    {item.text}
                </Checkbox>
            )
        }
    </div>
}
