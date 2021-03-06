/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, {useState, Children} from 'react';
import useTabGroupChoiceContext from '@theme/hooks/useTabGroupChoiceContext';

import classnames from 'classnames';

import styles from './styles.module.css';

const keys = {
  left: 37,
  right: 39,
};

function Tabs(props) {
  const {block, children, defaultValue, values, groupId} = props;
  const {tabGroupChoices, setTabGroupChoices} = useTabGroupChoiceContext();
  const [selectedValue, setSelectedValue] = useState(defaultValue);

  const [hasHadChange, setHasHadChange] = useState(false);

  if (groupId != null) {
    const relevantTabGroupChoice = tabGroupChoices[groupId];
    if (
      relevantTabGroupChoice != null &&
      relevantTabGroupChoice !== selectedValue
    ) {
      setSelectedValue(relevantTabGroupChoice);
    }
  }

  const changeSelectedValue = (newValue) => {
    setSelectedValue(newValue);
    if (groupId != null) {
      setTabGroupChoices(groupId, newValue);
    }
  };

  const tabRefs = [];

  const focusNextTab = (tabs, target) => {
    const next = tabs.indexOf(target) + 1;

    if (!tabs[next]) {
      tabs[0].focus();
    } else {
      tabs[next].focus();
    }
  };

  const focusPreviousTab = (tabs, target) => {
    const prev = tabs.indexOf(target) - 1;

    if (!tabs[prev]) {
      tabs[tabs.length - 1].focus();
    } else {
      tabs[prev].focus();
    }
  };

  const handleKeydown = (tabs, target, event) => {
    switch (event.keyCode) {
      case keys.right:
        focusNextTab(tabs, target);
        break;
      case keys.left:
        focusPreviousTab(tabs, target);
        break;
      default:
        break;
    }
  };

  /*
   * Even though a tab is selected on render, we don't want to show the
   * selected/hover state on the tab headers until subsequent renders
   */
  const onChange = callback => {
    if (!hasHadChange) {
      setHasHadChange(true);
    }

    callback();
  };

  return (
    <div>
      <ul
        role="tablist"
        className={classnames('tabs', {
          'tabs--block': block,
        })}>
        {values.map(({value, label}) => (
          <li
            role="tab"
            tabIndex="0"
            aria-selected={selectedValue === value}
            className={classnames('tab-item', styles.tabItem, {
              'tab-item--active': selectedValue === value && hasHadChange,
            })}
            key={value}
            ref={(tabControl) => tabRefs.push(tabControl)}
            onKeyDown={(event) => onChange(() => handleKeydown(tabRefs, event.target, event))}
            onFocus={() => onChange(() => changeSelectedValue(value))}
            onMouseOver={() => onChange(() => changeSelectedValue(value))}
            onClick={() => onChange(() => changeSelectedValue(value))}>
            {label}
          </li>
        ))}
      </ul>
      <div role="tabpanel" className="margin-vert--md">
        {
          Children.toArray(children).filter(
            (child) => child.props.value === selectedValue,
          )[0]
        }
      </div>
    </div>
  );
}

export default Tabs;
