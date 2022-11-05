import {Checkbox} from "@cloudscape-design/components";
import {useState} from "react";

export interface CheckboxItem {
    key: string;
    text: string;
    checked: boolean;
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
                >
                    {item.text}
                </Checkbox>
            )
        }
    </div>
}
