var levels = [
  {
    //lv1
    name: "justify-content 1",
    instructions: {
      en: '<p>Welcome to Flexbox Owlet, a game where you help Owlet and friends by writing CSS code! Guide this owl to the tree on the right by using the <code>justify-content</code> property, which aligns items horizontally and accepts the following values:</p><ul><li><code>flex-start</code>: Owlet align to the left side of the container.</li><li><code>flex-end</code>: Items align to the right side of the container.</li><li><code>center</code>: Items align at the center of the container.</li><li><code>space-between</code>: Items display with equal spacing between them.</li><li><code>space-around</code>: Items display with equal spacing around them.</li></ul><p>For example, <code>justify-content: flex-end;</code> will move the owl to the right. <img src="https://code.org/api/hour/begin_flexbox_froggy.png"></p>',
      vi: "<p>Chào mừng bạn đến Flexbox Owlet, một trò chơi để bạn giúp đỡ Owlet và bạn bè bằng cách viết mã CSS! Hướng dẫn chú cú này đến những cái cây bên phải bằng cách sử dụng từ <code>justify-content</code> để sắp xếp các hạng mục theo chiều ngang và chấp nhận các giá trị sau:</p><ul><li><code>flex-start</code>: Các hạng mục sẽ được sắp xếp về phía bên trái của hộp chứa.</li><li><code>flex-end</code>: Các hạng mục sẽ được sắp xếp về phía bên phải của hộp chứa.</li><li><code>center</code>: Các hạng mục sẽ được sắp xếp ở giữa chính của hộp chứa.</li><li><code>space-between</code>: Các hạng mục sẽ được trình bày với khoảng cách bằng nhau giữa chúng.</li><li><code>space-around</code>: Các hạng mục sẽ được trình bày với khoảng cách bằng nhau xung quanh chúng.</li></ul><p>Ví dụ như, <code>justify-content: flex-end;</code> sẽ di chuyển chú cú qua bên phải.</p>",
    },
    board: "g",
    style: { "justify-content": "flex-end" },
    before: "#container {\n  display: flex;\n",
    after: "}",
  },
  {
    //lv2
    name: "justify-content 2",
    instructions: {
      en: "<p>Use <code>justify-content</code> again to help these owls get to their trees. Remember that this CSS property aligns items horizontally and accepts the following values:</p><ul><li><code>flex-start</code>: Items align to the left side of the container.</li><li><code>flex-end</code>: Items align to the right side of the container.</li><li><code>center</code>: Items align at the center of the container.</li><li><code>space-between</code>: Items display with equal spacing between them.</li><li><code>space-around</code>: Items display with equal spacing around them.</li></ul>",
      vi: "<p>Sử dụng <code>justify-content</code> một lần nữa để giúp đỡ những chú cú này đến các những cái cây. Hãy nhớ rằng thuộc tính CSS này dùng để sắp xếp các hạng mục theo chiều ngang và chấp nhận các giá trị sau:</p><ul><li><code>flex-start</code>: Các hạng mục sẽ được sắp xếp về phía bên trái của hộp chứa.</li><li><code>flex-end</code>: Các hạng mục sẽ được sắp xếp về phía bên phải của hộp chứa.</li><li><code>center</code>: Các hạng mục sẽ được sắp xếp ở giữa chính của hộp chứa.</li><li><code>space-between</code>: Các hạng mục sẽ được trình bày với khoảng cách bằng nhau giữa chúng.</li><li><code>space-around</code>: Các hạng mục sẽ được trình bày với khoảng cách bằng nhau xung quanh chúng.</li></ul>",
    },
    board: "gy",
    style: { "justify-content": "center" },
    before: "#container {\n  display: flex;\n",
    after: "}",
  },
  {
    //lv3
    name: "justify-content 3",
    instructions: {
      en: "<p>Help all three owls find their trees just by using <code>justify-content</code>. This time, the trees have lots of space all around them.</p><p>If you find yourself forgetting the possible values for a property, you can click on the property name to view them. Try clicking on <code>justify-content</code>.</p>",
      vi: "<p>Giúp tất cả ba chú cú tìm những cái cây của họ bằng cách sử dụng <code>justify-content</code>. Lần này, những cái cây có rất nhiều không gian xung quanh chúng. </p><p>Nếu bạn thấy mình đang quên đi những giá trị cho thuộc tính này, bạn có thể di chuột qua từ đó để xem chúng. Hãy thử di chuột qua từ này<code>justify-content</code>.</p>",
    },
    board: "gyr",
    style: { "justify-content": "space-around" },
    before: "#container {\n  display: flex;\n",
    after: "}",
  },
  {
    //lv4
    name: "justify-content 4",
    instructions: {
      en: "<p>Now the trees on the edges have drifted to the shore, increasing the space between them. Use <code>justify-content</code>. This time, the trees have equal spacing between them.</p>",
      vi: "<p>Bây giờ những cái cây đã trôi dạt vào bờ, tạo thêm không gian giữa chúng. Sử dụng <code>justify-content</code>. Lần này, những cái cây có khoảng cách bằng nhau giữa chúng.</p>",
    },
    board: "gyr",
    style: { "justify-content": "space-between" },
    before: "#container {\n  display: flex;\n",
    after: "}",
  },
  {
    //lv5
    name: "align-items 1",
    instructions: {
      en: "<p>Now use <code>align-items</code> to help the owls get to the bottom of the container. This CSS property aligns items vertically and accepts the following values:</p><ul><li><code>flex-start</code>: Items align to the top of the container.</li><li><code>flex-end</code>: Items align to the bottom of the container.</li><li><code>center</code>: Items align at the vertical center of the container.</li><li><code>baseline</code>: Items display at the baseline of the container.</li><li><code>stretch</code>: Items are stretched to fit the container.</li></ul>",
      vi: "<p>Bây giờ sử dụng <code>align-items</code> để giúp những chú cú đến đáy của ao. Từ thuộc tính CSS này sắp xếp những hạng mục theo chiều dọc và chấp nhận các giá trị sau:</p><ul><li><code>flex-start</code>: Các hạng mục sẽ được sắp xếp phía trên của hộp chứa.</li><li><code>flex-end</code>: Các hạng mục sẽ được sắp xếp phía dưới cùng của hộp chứa.</li><li><code>center</code>: Các hạng mục sẽ được sắp xếp ở giữa chính của hộp chứa.</li><li><code>baseline</code>: Các hạng mục sẽ được hiển thị ở đường cơ bản của hộp chứa.</li><li><code>stretch</code>: Các hạng mục sẽ được kéo dài để phù hợp với hộp chứa.</li></ul>",
    },
    board: "gyr",
    style: { "align-items": "flex-end" },
    before: "#container {\n  display: flex;\n",
    after: "}",
  },
  {
    //lv6
    name: "align-items 2",
    instructions: {
      en: "<p>Lead the owl to the center of the container using a combination of <code>justify-content</code> and <code>align-items</code>.</p>",
      vi: "<p>Dẫn chú cú đến trung tâm của ao bằng cách kết hợp <code>justify-content</code> và <code>align-items</code>.</p>",
    },
    board: "g",
    style: { "justify-content": "center", "align-items": "center" },
    before: "#container {\n  display: flex;\n",
    after: "}",
  },
  {
    //lv7
    name: "align-items 3",
    instructions: {
      en: "<p>The owls need to cross the container again, this time for some trees with plenty of space around them. Use a combination of <code>justify-content</code> and <code>align-items</code>.</p>",
      vi: "<p>Những chú cú cần phải qua ao một lần nữa, lần này các những cái cây có nhiều không gian xung quanh chúng. Kết hợp <code>justify-content</code> và <code>align-items</code>.</p>",
    },
    board: "gyr",
    style: { "justify-content": "space-around", "align-items": "flex-end" },
    before: "#container {\n  display: flex;\n",
    after: "}",
  },
  {
    //lv8
    name: "flex-direction 1",
    instructions: {
      en: "<p>The owls need to get in the same order as their trees using <code>flex-direction</code>. This CSS property defines the direction items are placed in the container, and accepts the following values:</p><ul><li><code>row</code>: Items are placed the same as the text direction.</li><li><code>row-reverse</code>: Items are placed opposite to the text direction.</li><li><code>column</code>: Items are placed top to bottom.</li><li><code>column-reverse</code>: Items are placed bottom to top.</li></ul>",
      vi: "<p>Những chú cú cần phải đến với các những cái cây cùng màu của chúng bằng cách sử dụng <code>flex-direction</code>. Từ thuộc tính CSS này xác định hướng hạng mục được đặt trong hộp chứa, và chấp nhận các giá trị sau:</p><ul><li><code>row</code>: Các hạng mục được đặt cùng hướng với hướng của từ trong văn bản.</li><li><code>row-reverse</code>: Các hạng mục được đặt ngược hướng với hướng của từ trong văn bản.</li><li><code>column</code>: Các hạng mục được đặt từ trên xuống dưới.</li><li><code>column-reverse</code>: Các hạng mục được đặt từ dưới lên trên.</li></ul>",
    },
    board: "gyr",
    style: { "flex-direction": "row-reverse" },
    before: "#container {\n  display: flex;\n",
    after: "}",
  },
  {
    //lv9
    name: "flex-direction 2",
    instructions: {
      en: "<p>Help the owls find their column of trees using <code>flex-direction</code>. This CSS property defines the direction items are placed in the container, and accepts the following values:</p><ul><li><code>row</code>: Items are placed the same as the text direction.</li><li><code>row-reverse</code>: Items are placed opposite to the text direction.</li><li><code>column</code>: Items are placed top to bottom.</li><li><code>column-reverse</code>: Items are placed bottom to top.</li></ul>",
      vi: "<p>Giúp đỡ những chú cú tìm thấy các những cái cây được sắp xếp theo hàng dọc sử dụng <code>flex-direction</code>. Từ thuộc tính CSS này xác định hướng hạng mục được đặt trong hộp chứa, và chấp nhận các giá trị sau:</p><ul><li><code>row</code>: Các hạng mục được đặt cùng hướng với hướng của từ trong văn bản.</li><li><code>row-reverse</code>: Các hạng mục được đặt ngược hướng với hướng của từ trong văn bản.</li><li><code>column</code>: Các hạng mục được đặt từ trên xuống dưới.</li><li><code>column-reverse</code>: Các hạng mục được đặt từ dưới lên trên.</li></ul>",
    },
    board: "gyr",
    style: { "flex-direction": "column" },
    before: "#container {\n  display: flex;\n",
    after: "}",
  },
  {
    //lv10
    name: "flex-direction 3",
    instructions: {
      en: "<p>Help the owls get to their own trees. Although they seem close, it will take both <code>flex-direction</code> and <code>justify-content</code> to get them there.</p><p>Notice that when you set the direction to a reversed row or column, start and end are also reversed.</p>",
      vi: "<p>Giúp đỡ những chú cú tìm thấy các những cái cây của chúng. Mặc dù các lá gần nhau, nhưng sẽ cần cả hai thuộc tính <code>flex-direction</code> và <code>justify-content</code> để đưa chúng đến nơi.</p><p>Chú ý rằng khi bạn thiết lập các chiều hướng của một hàng hoặc cột đảo ngược, điểm bắt đầu và kết thúc cũng được đảo ngược.</p>",
    },
    board: "gyr",
    style: { "flex-direction": "row-reverse", "justify-content": "flex-end" },
    before: "#container {\n  display: flex;\n",
    after: "}",
  },
  {
    //lv11
    name: "flex-direction 4",
    instructions: {
      en: "<p>Help the owls find their trees using <code>flex-direction</code> and <code>justify-content</code>.</p><p>Notice that when the flex direction is a column, <code>justify-content</code> changes to the vertical and <code>align-items</code> to the horizontal.</p>",
      vi: "<p>Giúp đỡ những chú cú tìm thấy các những cái cây của chúng bằng cách sử dụng <code>flex-direction</code> và <code>justify-content</code>.</p><p>Chú ý rằng khi hướng flex là hàng dọc, <code>justify-content</code> thay đổi thành chiều dọc và <code>align-items</code> to chiều ngang.</p>",
    },
    board: "gyr",
    style: { "flex-direction": "column", "justify-content": "flex-end" },
    before: "#container {\n  display: flex;\n",
    after: "}",
  },
  {
    //lv12
    name: "flex-direction 5",
    instructions: {
      en: "<p>Help the owls find their trees using <code>flex-direction</code> and <code>justify-content</code>.</p>",
      vi: "<p>Giúp đỡ những chú cú tìm các những cái cây của họ bằng cách sử dụng <code>flex-direction</code> và <code>justify-content</code>.</p>",
    },
    board: "gyr",
    style: {
      "flex-direction": "column-reverse",
      "justify-content": "space-between",
    },
    before: "#container {\n  display: flex;\n",
    after: "}",
  },
  {
    //lv13
    name: "flex-direction 6",
    instructions: {
      en: "<p>Help the owls find their trees using <code>flex-direction</code>, <code>justify-content</code>, and <code>align-items</code>.</p>",
      vi: "<p>Giúp đỡ những chú cú tìm các những cái cây của họ bằng cách sử dụng <code>flex-direction</code>, <code>justify-content</code>, và <code>align-items</code>.</p>",
    },
    board: "gyr",
    style: {
      "flex-direction": "row-reverse",
      "justify-content": "center",
      "align-items": "flex-end",
    },
    before: "#container {\n  display: flex;\n",
    after: "}",
  },
  {
    //lv14
    name: "order 1",
    instructions: {
      en: "<p>Sometimes reversing the row or column order of a container is not enough. In these cases, we can apply the <code>order</code> property to individual items. By default, items have a value of 0, but we can use this property to also set it to a positive or negative integer value (-2, -1, 0, 1, 2).</p><p>Use the <code>order</code> property to reorder the owls according to their trees.</p>",
      vi: "<p>Đôi khi đảo chiều của hộp chứa theo hàng ngang hay hàng dọc là không đủ. Trong những trường hợp này, chúng ta có thể áp dụng thuộc tính <code>order</code> cho từng hạng mục riêng lẻ. Theo mặc định, các hạng mục có giá trị là 0, nhưng chúng ta có thể thay đổi thuộc tính đó với một giá trị số nguyên dương hoặc âm khác.</p><p>Sử dụng thuộc tính <code>order</code> để sắp xếp lại những chú cú theo các những cái cây của chúng.</p>",
    },
    board: "gyr",
    selector: "> :nth-child(2)",
    classes: { "#container, #background": "wrap" },
    style: { order: "2" },
    before: "#container {\n  display: flex;\n}\n\n.yellow {\n",
    after: "}",
  },
  {
    //lv15
    name: "order 2",
    instructions: {
      en: "<p>Use the <code>order</code> property to send the red owl to his tree.</p>",
      vi: "<p>Sử dụng thuộc tính <code>order</code> để đưa chú cú màu đỏ đến với những cái cây của mình.</p>",
    },
    board: "gggrg",
    selector: "> :nth-child(4)",
    classes: { "#container, #background": "wrap" },
    style: { order: "-1" },
    before: "#container {\n  display: flex;\n}\n\n.red {\n",
    after: "}",
  },
  {
    //lv16
    name: "align-self 1",
    instructions: {
      en: "<p>Another property you can apply to individual items is <code>align-self</code>. This property accepts the same values as <code>align-items</code> and its value for the specific item.</p>",
      vi: "<p>Một thuộc tính CSS khác mà bạn có thể áp dụng cho các hạng mục riêng biệt là <code>align-self</code>. Thuộc tính CSS này chấp nhận các giá trị tương tự như <code>align-items</code> và giá trị của nó đối với một hạng mục riêng biệt.</p>",
    },
    board: "ggygg",
    selector: "> :nth-child(3)",
    style: { "align-self": "flex-end" },
    before:
      "#container {\n  display: flex;\n  align-items: flex-start;\n}\n\n.yellow {\n",
    after: "}",
  },
  {
    //lv17
    name: "align-self 2",
    instructions: {
      en: "<p>Combine <code>order</code> with <code>align-self</code> to help the owls to their destinations.</p>",
      vi: "<p>Kết hợp <code>order</code> với <code>align-self</code> giúp các chú cú đến đúng địa điểm của chúng.</p>",
    },
    board: "ygygg",
    selector: "> .yellow",
    style: { "align-self": "flex-end", order: "2" },
    before:
      "#container {\n  display: flex;\n  align-items: flex-start;\n}\n\n.yellow {\n",
    after: "}",
  },
  {
    //lv18
    name: "flex-wrap 1",
    instructions: {
      en: "<p>Oh no! The owls are all squeezed onto a single row of trees. Spread them out using the <code>flex-wrap</code> property, which accepts the following values:</p><ul><li><code>nowrap</code>: Every item is fit to a single line.</li><li><code>wrap</code>: Items wrap around to additional lines.</li><li><code>wrap-reverse</code>: Items wrap around to additional lines in reverse.</li></ul>",
      vi: "<p>Ồ không! Những chú cú đều được dồn vào một hàng duy nhất theo các những cái cây. Tách rời chúng ra bằng cách sử dụng thuộc tính <code>flex-wrap</code>, thuộc tính này chấp nhận các giá trị sau:</p><ul><li><code>nowrap</code>: Mỗi hạng mục được dồn vào một hàng duy nhất.</li><li><code>wrap</code>: Các hạng mục quấn xung quanh để tạo thêm dòng.</li><li><code>wrap-reverse</code>: Các hạng mục quấn xung quanh để tạo thêm dòng ngược lại.</li></ul>",
    },
    board: "ygggggr",
    style: { "flex-wrap": "wrap" },
    before: "#container {\n  display: flex;\n",
    after: "}",
  },
  {
    //lv19
    name: "flex-wrap 2",
    instructions: {
      en: "<p>Help this army of owls form three orderly columns using a combination of <code>flex-direction</code> and <code>flex-wrap</code>.</p>",
      vi: "<p>Giúp đội quân ếch xếp thành ba hàng trật tự bằng cách kết hợp <code>flex-direction</code> và <code>flex-wrap</code>.</p>",
    },
    board: "gggggrrrrryyyyy",
    style: { "flex-direction": "column", "flex-wrap": "wrap" },
    before: "#container {\n  display: flex;\n",
    after: "}",
  },
  {
    //lv20
    name: "flex-flow 1",
    instructions: {
      en: "<p>The two properties <code>flex-direction</code> and <code>flex-wrap</code> are used so often together that the shorthand property <code>flex-flow</code> was created to combine them. This shorthand property accepts the value of the two properties separated by a space.</p><p>For example, you can use <code>flex-flow: row wrap</code> to set rows and wrap them.</p><p>Try using <code>flex-flow</code> to repeat the previous level.</p>",
      vi: "<p>Cả hai thuộc tính <code>flex-direction</code> và <code>flex-wrap</code> thường được sử dụng với nhau vì thế từ viết tắt <code>flex-flow</code> được tạo ra để kết hợp chúng. Từ viết tắt này chấp nhận giá trị của một trong hai thuộc tính ngăn cách bởi một khoảng trắng.</p><p>Ví dụ, bạn có thể sử dụng <code>flex-flow: row wrap</code> để thiết lập hàng ngang và quấn xung quanh chúng.</p><p>Thử sử dụng <code>flex-flow</code> để lặp lại cấp độ trước đó.</p>",
    },
    board: "gggggrrrrryyyyy",
    style: { "flex-flow": "column wrap" },
    before: "#container {\n  display: flex;\n",
    after: "}",
  },
  {
    //lv21
    name: "align-content 1",
    instructions: {
      en: "<p>The owls are spread all over the container, but the trees are bunched at the top. You can use <code>align-content</code> to set how multiple lines are spaced apart from each other. This property takes the following values:</p><ul><li><code>flex-start</code>: Lines are packed at the top of the container.</li><li><code>flex-end</code>: Lines are packed at the bottom of the container.</li><li><code>center</code>: Lines are packed at the vertical center of the container.</li><li><code>space-between</code>: Lines display with equal spacing between them.</li><li><code>space-around</code>: Lines display with equal spacing around them.</li><li><code>stretch</code>: Lines are stretched to fit the container.</li></ul><p>This can be confusing, but <code>align-content</code> determines the spacing between lines, while <code>align-items</code> determines how the items as a whole are aligned within the container. When there is only one line, <code>align-content</code> has no effect.</p>",
      vi: "<p>Những chú cú đang lan rộng trên cả ao, nhưng các những cái cây đang chụm lại ở phía trên. Bạn có thể dùng <code>align-content</code> để thiết lập cách các dòng có khoảng cách xa nhau như thế nào. Những thuộc tính này có giá trị như sau:</p><ul><li><code>flex-start</code>: Các dòng được dồn về phía trên cùng của hộp chứa.</li><li><code>flex-end</code>: Các dòng được dồn về phía dưới cùng của hộp chứa.</li><li><code>center</code>: Các dòng được dồn về trung tâm của hộp chứa.</li><li><code>space-between</code>: Các dòng được trình bày với khoảng cách bằng nhau giữa chúng.</li><li><code>space-around</code>: Các dòng sẽ được trình bày với khoảng cách bằng nhau xung quanh chúng.</li><li><code>stretch</code>: Các dòng sẽ được kéo dài để phù hợp với hộp chứa.</li></ul><p>Điều này có thể gây nhầm lẫn, nhưng <code>align-content</code> xác định khoảng cách giữa các dòng, trong khi <code>align-items</code> xác định cách các hạng mục như một toàn thể được xếp trong hộp chứa. Khi chỉ có một dòng, <code>align-content</code> không có hiệu lực.</p>",
    },
    board: "ggggggggggggggg",
    classes: { "#container, #background": "wrap" },
    style: { "align-content": "flex-start" },
    before: "#container {\n  display: flex;\n  flex-wrap: wrap;\n",
    after: "}",
  },
  {
    //lv22
    name: "align-content 2",
    instructions: {
      en: "<p>Now the current has bunched the trees at the bottom. Use <code>align-content</code> to guide the owls there.</p>",
      vi: "<p>Hiện tại những cái cây ở phía dưới. Sử dụng <code>align-content</code> để hướng dẫn các chú cú đến chỗ đó.</p>",
    },
    board: "ggggggggggggggg",
    classes: { "#container, #background": "wrap" },
    style: { "align-content": "flex-end" },
    before: "#container {\n  display: flex;\n  flex-wrap: wrap;\n",
    after: "}",
  },
  {
    //lv23
    name: "align-content 3",
    instructions: {
      en: "<p>The owls have had a party, but it is time to go home. Use a combination of <code>flex-direction</code> and <code>align-content</code> to get them to their trees.</p>",
      vi: "<p>Những chú cú đã có một bữa tiệc, nhưng đã đến lúc để về nhà. Kết hợp thuộc tính <code>flex-direction</code> và <code>align-content</code> để đưa chúng về với những cái cây.</p>",
    },
    board: "rgggyrgggyrgggy",
    classes: { "#container, #background": "wrap" },
    style: { "flex-direction": "column-reverse", "align-content": "center" },
    before: "#container {\n  display: flex;\n  flex-wrap: wrap;\n",
    after: "}",
  },
  {
    //lv24
    name: "align-content 4",
    instructions: {
      en: '<p>Bring the owls home one last time by using the CSS properties you\'ve learned:</p><ul><li><code>justify-content</code></li><li><code>align-items</code></li><li><code>flex-direction</code></li><li><code>order</code></li><li><code>align-self</code></li><li><code>flex-wrap</code></li><li><code>flex-flow</code></li><li><code>align-content</code></li></ul>',
      vi: "<p>Đưa những chú cú về nhà một lần cuối cùng bằng cách sử dụng các thuộc tính CSS mà bạn đã học:</p><ul><li><code>justify-content</code></li><li><code>align-items</code></li><li><code>flex-direction</code></li><li><code>order</code></li><li><code>align-self</code></li><li><code>flex-wrap</code></li><li><code>flex-flow</code></li><li><code>align-content</code></li></ul>",
    },
    board: "rggggyy",
    style: {
      "flex-direction": "column-reverse",
      "flex-wrap": "wrap-reverse",
      "align-content": "space-between",
      "justify-content": "center",
    },
    before: "#container {\n  display: flex;\n",
    after: "}",
  },
];

var levelWin = {
  name: "win",
  instructions: {
    en: '<p>You win! Thanks to your mastery of flexbox, you were able to help all of the owls to their trees. Just look how hoppy they are!</p><p>If you found this ribbeting, be sure to visit <a href="#!">Grid Farmer</a> to learn about another powerful new feature of CSS layout. And be sure to share Flexbox Owlet with your friends!</p>',
    vi: '<p>Chiến thắng! Nhờ sự thành thạo Flexbox của bạn, bạn đã giúp tất cả các chú cú trở về với những cái cây của chúng. Nhìn xem chúng hạnh phúc biết bao nhiêu!</p><p>Nếu bạn thấy dự án này lôi cuốn, hãy chia sẻ Flexbox Owlet với bạn bè!</p>',
  },
  board: "gyrgyrgyrgyrgyrgyrgyrgyrg",
  classes: { "#container, #background": "wrap" },
  style: {},
  before: "#container {\n  display: flex;\n",
  after: "}",
};
