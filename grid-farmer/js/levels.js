var levels = [
    {
        //lv1
        name: 'grid-column-start 1',
        instructions: {
            'en': '<p>Welcome to Grid Farmer, where you write CSS code to grow your tree garden! Water only the areas that have tree by using the <code>grid-column-start</code> property.</p><p>For example, <code>grid-column-start: 3;</code> will water the area starting at the 3rd vertical grid line, which is another way of saying the 3rd vertical border from the left in the grid.<img src="https://code.org/api/hour/begin_codepip_grid.png"></p>',

            'vi': '<p>Chào mừng bạn đã đến với Grid Farmer, tại đây bạn sẽ dùng CSS code để vun trồng khu vườn của mình! Tưới nước vào những khu vực trồng cây bằng cách sử dụng thuộc tính <code>grid-column-start</code>.</p><p>Ví dụ <code>grid-column-start: 3;</code> sẽ tưới nước cho khu vực bắt đầu từ đường kẻ dọc thứ 3 trừ trái qua.<img src="https://code.org/api/hour/begin_codepip_grid.png"></p>',

        },
        board: 'c',
        selector: '> :nth-child(1)',
        style: { 'grid-column-start': '3' },
        before: "#garden {\n  display: grid;\n  grid-template-columns: 20% 20% 20% 20% 20%;\n  grid-template-rows: 20% 20% 20% 20% 20%;\n}\n\n#water {\n",
        after: "}"
    },
    {
        //lv2
        name: 'grid-column-start 2',
        instructions: {
            'en': '<p>Uh oh, looks like weeds are growing in the corner of your garden. Use <code>grid-column-start</code> to poison them. Note that the weeds start at the 5th vertical grid line.</p>',

            'vi': '<p>Ơ kìa! Trông có vẻ như cỏ dại đang phát triển phía góc phải của khu vườn. Hãy sử dụng <code>grid-column-start</code> để tiêu diệt chúng. Nhớ rằng, cỏ dại bắt đầu mọc từ đường kẻ dọc thứ 5.</p>',

        },
        board: 'w',
        selector: '> :nth-child(1)',
        style: { 'grid-column-start': '5' },
        before: "#garden {\n  display: grid;\n  grid-template-columns: 20% 20% 20% 20% 20%;\n  grid-template-rows: 20% 20% 20% 20% 20%;\n}\n\n#poison {\n",
        after: "}"
    },
    {
        //lv3
        name: 'grid-column-end 1',
        instructions: {
            'en': '<p>When <code>grid-column-start</code> is used alone, the grid item by default will span exactly one column. However, you can extend the item across multiple columns by adding the <code>grid-column-end</code> property.</p><p>Using <code>grid-column-end</code>, water all of your tree while avoiding the dirt. We don\'t want to waste any water! Note that the tree start at the 1st vertical grid line and end at the 4th.</p>',


            'vi': '<p>Khi <code>grid-column-start</code> được dùng độc lập, thì đối tượng đó sẽ chiếm một khoảng chính xác bằng một cột. Tuy nhiên, bạn có thể mở rộng thêm nhiều cột nữa bằng thuộc tính <code>grid-column-end</code>.</p><p>Hãy sử dụng <code>grid-column-end</code> để tưới nước cho cây của mình. Nhớ đừng lãng phí nước vào những khu vực đất trống nhé! Cây được trồng bắt đầu từ đường kẻ dọc thứ nhất và kết thúc ở đường thứ 4.</p>',


        },
        board: 'c',
        classes: { '#garden > *, #plants > *': 'grid-column-start-1' },
        selector: '> :nth-child(1)',
        style: { 'grid-column-end': '4' },
        before: "#garden {\n  display: grid;\n  grid-template-columns: 20% 20% 20% 20% 20%;\n  grid-template-rows: 20% 20% 20% 20% 20%;\n}\n\n#water {\n  grid-column-start: 1;\n",
        after: "}"
    },
    {
        //lv4
        name: 'grid-column-end 2',
        instructions: {
            'en': '<p>When pairing <code>grid-column-start</code> and <code>grid-column-end</code>, you might assume that the end value has to be greater than the start value. But this turns out not the case!</p><p>Try setting <code>grid-column-end</code> to a value less than 5 to water your tree.</p>',

            'vi': '<p>Khi kết hợp <code>grid-column-start</code> và <code>grid-column-end</code>, bạn có thể đang nghĩ rằng giá trị kết thúc sẽ lớn hơn giá trị bắt đầu. Tuy nhiên dưới đây là một trường hợp ngược lại!</p><p>Hãy thử gán <code>grid-column-end</code> với một giá trị nhỏ hơn 5 để tưới nước cho cây của mình.</p>',

        },
        board: 'c',
        classes: { '#garden > *, #plants > *': 'grid-column-start-5' },
        selector: '> :nth-child(1)',
        style: { 'grid-column-end': '2' },
        before: "#garden {\n  display: grid;\n  grid-template-columns: 20% 20% 20% 20% 20%;\n  grid-template-rows: 20% 20% 20% 20% 20%;\n}\n\n#water {\n  grid-column-start: 5;\n",
        after: "}"
    },
    {
        //lv5
        name: 'grid-column-end 3',
        instructions: {
            'en': '<p>If you want to count grid lines from the right instead of the left, you can give <code>grid-column-start</code> and <code>grid-column-end</code> negative values. For example, you can set it to -1 to specify the first grid line from the right.</p><p>Try setting <code>grid-column-end</code> to a negative value.</p>',

            'vi': '<p>Nếu bạn muốn tính các dòng của grid từ phải sang thay vì trái sang, bạn có thể gán cho <code>grid-column-start</code> và <code>grid-column-end</code> giá trị âm. Ví dụ, bạn có thể gán giá trị -1 để qui định dòng đó là dòng đầu tiên tính từ phải sang.</p><p>Nào! Bây giờ hãy thử gán cho <code>grid-column-end</code> bằng một giá trị âm.</p>',

        },
        board: 'c',
        classes: { '#garden > *, #plants > *': 'grid-column-start-1' },
        selector: '> :nth-child(1)',
        style: { 'grid-column-end': '-2' },
        before: "#garden {\n  display: grid;\n  grid-template-columns: 20% 20% 20% 20% 20%;\n  grid-template-rows: 20% 20% 20% 20% 20%;\n}\n\n#water {\n  grid-column-start: 1;\n",
        after: "}"
    },
    {
        //lv6
        name: 'grid-column-start 3',
        instructions: {
            'en': '<p>Now try setting <code>grid-column-start</code> to a negative value.</p>',

            'vi': '<p>Hãy thử gán cho <code>grid-column-start</code> một giá trị âm.</p>',

        },
        board: 'w',
        selector: '> :nth-child(1)',
        style: { 'grid-column-start': '-3' },
        before: "#garden {\n  display: grid;\n  grid-template-columns: 20% 20% 20% 20% 20%;\n  grid-template-rows: 20% 20% 20% 20% 20%;\n}\n\n#poison {\n",
        after: "}"
    },
    {
        //lv7
        name: 'grid-column-end 4',
        instructions: {
            'en': '<p>Instead of defining a grid item based on the start and end positions of the grid lines, you can define it based on your desired column width using the <code>span</code> keyword. Keep in mind that <code>span</code> only works with positive values.</p><p>For example, water these tree with the rule <code>grid-column-end: span 2;</code>.</p>',

            'vi': '<p>Thay vì định nghĩa một đối tượng grid bằng việc xác định vị trí bắt đầu và kết thúc của các dòng, bạn có thể định nghĩa số cột bằng từ khóa <code>span</code>. Hãy nhớ rằng <code>span</code> chỉ hoạt động với các giá trị dương.</p><p>Ví dụ, cây sẽ được tưới nước với <code>grid-column-end: span 2;</code>.</p>',

        },
        board: 'c',
        classes: { '#garden > *, #plants > *': 'grid-column-start-2' },
        selector: '> :nth-child(1)',
        style: { 'grid-column-end': 'span 2' },
        before: "#garden {\n  display: grid;\n  grid-template-columns: 20% 20% 20% 20% 20%;\n  grid-template-rows: 20% 20% 20% 20% 20%;\n}\n\n#water {\n  grid-column-start: 2;\n",
        after: "}"
    },
    {
        //lv8
        name: 'grid-column-end 5',
        instructions: {
            'en': '<p>Try using <code>grid-column-end</code> with the <code>span</code> keyword again to water your tree.</p>',

            'vi': '<p>Hãy thử dùng <code>grid-column-end</code> với từ khóa <code>span</code> để tưới nước cho cây một lần nữa nhé.</p>',

        },
        board: 'c',
        classes: { '#garden > *, #plants > *': 'grid-column-start-1' },
        selector: '> :nth-child(1)',
        style: { 'grid-column-end': 'span 5' },
        before: "#garden {\n  display: grid;\n  grid-template-columns: 20% 20% 20% 20% 20%;\n  grid-template-rows: 20% 20% 20% 20% 20%;\n}\n\n#water {\n  grid-column-start: 1;\n",
        after: "}"
    },
    {
        //lv9
        name: 'grid-column-start 4',
        instructions: {
            'en': '<p>You can also use the <code>span</code> keyword with <code>grid-column-start</code> to set your item\'s width relative to the end position.</p>',

            'vi': '<p>Bạn vẫn có thể sử dụng từ khóa <code>span</code> cho <code>grid-column-start</code> để thiết lập chiều rộng của đối tượng bên trong grid liên quan đến vị trí kết thúc.</p>',

        },
        board: 'c',
        classes: { '#garden > *, #plants > *': 'grid-column-end-6' },
        selector: '> :nth-child(1)',
        style: { 'grid-column-start': 'span 3' },
        before: "#garden {\n  display: grid;\n  grid-template-columns: 20% 20% 20% 20% 20%;\n  grid-template-rows: 20% 20% 20% 20% 20%;\n}\n\n#water {\n",
        after: "  grid-column-end: 6;\n}"
    },
    {
        //lv10
        name: 'grid-column 1',
        instructions: {
            'en': '<p>Typing both <code>grid-column-start</code> and <code>grid-column-end</code> every time can get tiring. Fortunately, <code>grid-column</code> is a shorthand property that can accept both values at once, separated by a slash.</p><p>For example, <code>grid-column: 2 / 4;</code> will set the grid item to start on the 2nd vertical grid line and end on the 4th grid line.</p>',

            'vi': '<p>Bạn có thấy mệt mỏi vì việc phải gõ cả 2 thuộc tính <code>grid-column-start</code> và <code>grid-column-end</code> không?. May thay, <code>grid-column</code> là một thuộc tính rút gọn chấp nhập 2 thuộc tính này cùng lúc, các giá trị cách nhau bằng một dấu sổ chéo.</p><p>Ví dụ, <code>grid-column: 2 / 4;</code> sẽ thiết lập đối tượng bên trong grid bắt đầu từ dòng kẻ dọc thứ 2 và kết thúc ở dòng thứ 4.</p>',

        },
        board: 'c',
        selector: '> :nth-child(1)',
        style: { 'grid-column': '4 / 6' },
        before: "#garden {\n  display: grid;\n  grid-template-columns: 20% 20% 20% 20% 20%;\n  grid-template-rows: 20% 20% 20% 20% 20%;\n}\n\n#water {\n",
        after: "}"
    },
    {
        //lv11
        name: 'grid-column 2',
        instructions: {
            'en': '<p>Try using <code>grid-column</code> to water these tree. The <code>span</code> keyword also works with this shorthand property so give it a try!</p>',

            'vi': '<p>Hãy thử dùng <code>grid-column</code> để tưới nước cho cây. Từ khóa <code>span</code> vẫn sẽ dùng được với thuộc tính này!</p>',

        },
        board: 'c',
        selector: '> :nth-child(1)',
        style: { 'grid-column': '2 / 5' },
        before: "#garden {\n  display: grid;\n  grid-template-columns: 20% 20% 20% 20% 20%;\n  grid-template-rows: 20% 20% 20% 20% 20%;\n}\n\n#water {\n",
        after: "}"
    },
    {
        //lv12
        name: 'grid-row-start 1',
        instructions: {
            'en': '<p>One of the things that sets CSS grids apart from flexbox is that you can easily position items in two dimensions: columns and rows. <code>grid-row-start</code> works much like <code>grid-column-start</code> except along the vertical axis.</p><p>Use <code>grid-row-start</code> to water these tree.</p>',

            'vi': '<p>Một trong những điểm khác biệt giữa CSS grids với flexbox đó chính là bạn có thể dễ dàng thiết lập vị trí của một đối tượng bên trong grid theo cả cột và hàng. <code>grid-row-start</code> hoạt động tương tự như <code>grid-column-start</code> nhưng xét theo trục đứng.</p><p>Hãy dùng <code>grid-row-start</code> để tưới thêm nước cho cây nhé.</p>',

        },
        board: 'c',
        selector: '> :nth-child(1)',
        style: { 'grid-row-start': '3' },
        before: "#garden {\n  display: grid;\n  grid-template-columns: 20% 20% 20% 20% 20%;\n  grid-template-rows: 20% 20% 20% 20% 20%;\n}\n\n#water {\n",
        after: "}"
    },
    {
        //lv13
        name: 'grid-row-start 2',
        instructions: {
            'en': '<p>Now give the shorthand property <code>grid-row</code> a try.</p>',

            'vi': '<p>Bây giờ hãy thử với thuộc tính rút gọn <code>grid-row</code>.</p>',

        },
        board: 'c',
        selector: '> :nth-child(1)',
        style: { 'grid-row': '3 / 6' },
        before: "#garden {\n  display: grid;\n  grid-template-columns: 20% 20% 20% 20% 20%;\n  grid-template-rows: 20% 20% 20% 20% 20%;\n}\n\n#water {\n",
        after: "}"
    },
    {
        //lv14
        name: 'grid-column-row 1',
        instructions: {
            'en': '<p>Use <code>grid-column</code> and <code>grid-row</code> at the same time to set position in both dimensions.</p>',

            'vi': '<p>Hãy dùng cả <code>grid-column</code> và <code>grid-row</code> để thiết lập vị trí theo cả trục đứng và trục ngang.</p>',

        },
        board: 'w',
        selector: '> :nth-child(1)',
        style: { 'grid-column': '2', 'grid-row': '5' },
        before: "#garden {\n  display: grid;\n  grid-template-columns: 20% 20% 20% 20% 20%;\n  grid-template-rows: 20% 20% 20% 20% 20%;\n}\n\n#poison {\n",
        after: "}"
    },
    {
        //lv15
        name: 'grid-column-row 2',
        instructions: {
            'en': '<p>You can also use <code>grid-column</code> and <code>grid-row</code> together to span larger areas within the grid. Give it a try!</p>',

            'vi': '<p>Bạn cũng có thể kết hợp <code>grid-column</code> và <code>grid-row</code> để mở rộng vùng lựa chọn bên trong grid. Thử nhé!</p>',

        },
        board: 'c',
        selector: '> :nth-child(1)',
        style: { 'grid-column': '2 / 6', 'grid-row': '1 / 6' },
        before: "#garden {\n  display: grid;\n  grid-template-columns: 20% 20% 20% 20% 20%;\n  grid-template-rows: 20% 20% 20% 20% 20%;\n}\n\n#water {\n",
        after: "}"
    },
    {
        //lv16
        name: 'grid-area 1',
        instructions: {
            'en': '<p>If typing out both <code>grid-column</code> and <code>grid-row</code> is too much for you, there\'s yet another shorthand for that. <code>grid-area</code> accepts four values separated by slashes: <code>grid-row-start</code>, <code>grid-column-start</code>, <code>grid-row-end</code>, followed by <code>grid-column-end</code>.</p><p>One example of this would be <code>grid-area: 1 / 1 / 3 / 6;</code>.</p>',

            'vi': '<p>Một cách rút gọn có thể kết hợp cả 2 thuộc tính <code>grid-column</code> và <code>grid-row</code> là <code>grid-area</code>, 4 giá trị lần lượt nhận vào sẽ cách nhau bằng dấu sổ chéo: <code>grid-row-start</code>, <code>grid-column-start</code>, <code>grid-row-end</code>, <code>grid-column-end</code>.</p><p>Ví dụ như <code>grid-area: 1 / 1 / 3 / 6;</code>.</p>',

        },
        board: 'c',
        selector: '> :nth-child(1)',
        style: { 'grid-area': '1 / 2 / 4 / 6' },
        before: "#garden {\n  display: grid;\n  grid-template-columns: 20% 20% 20% 20% 20%;\n  grid-template-rows: 20% 20% 20% 20% 20%;\n}\n\n#water {\n",
        after: "}"
    },
    {
        //lv17
        name: 'grid-area 2',
        instructions: {
            'en': '<p>How about multiple items? You can overlap them without any trouble. Use <code>grid-area</code> to define a second area that covers all of the unwatered tree.</p>',

            'vi': '<p>Khi chúng ta có nhiều đối tượng bên trong grid? Bạn hoàn toàn có thể xếp chồng các đối tượng này lên nhau. Hãy dùng <code>grid-area</code> để định nghĩa thêm một khu vực khác phủ lên vùng trồng cây đã được tưới nước.</p>',

        },
        board: 'cc',
        classes: { '#garden > :nth-child(2), #plants > :nth-child(2)': 'grid-column-4' },
        selector: '> :nth-child(1)',
        style: { 'grid-area': '2 / 3 / 5 / 6' },
        before: "#garden {\n  display: grid;\n  grid-template-columns: 20% 20% 20% 20% 20%;\n  grid-template-rows: 20% 20% 20% 20% 20%;\n}\n\n#water-1 {\n  grid-area: 1 / 4 / 6 / 5;\n}\n\n#water-2 {\n",
        after: "}"
    },
    {
        //lv18
        name: 'order 1',
        instructions: {
            'en': '<p>If grid items aren\'t explicitly placed with <code>grid-area</code>, <code>grid-column</code>, <code>grid-row</code>, etc., they are automatically placed according to their order in the source code. We can override this using the <code>order</code> property, which is one of the advantages of grid over table-based layout.</p><p>By default, all grid items have an <code>order</code> of 0, but this can be set to any positive or negative value, similar to <code>z-index</code>.</p><p>Right now, the tree in the second column are being poisoned and the weeds in the last column are being watered. Change the <code>order</code> value of the poison to fix this right away!</p>',

            'vi': '<p>Nếu các đối tượng bên trong grid không được xác định vị trí bằng <code>grid-area</code>, <code>grid-column</code>, <code>grid-row</code>, vv., chúng sẽ được tự động sắp xếp theo đúng thứ tự trong code. Chúng ta cũng có thể thiết lập lại thứ tự này bằng thuộc tính <code>order</code>, đây cũng là một trong những lợi thế của grid so với các layout dựa trên table khác.</p><p>Mặc định, tất cả các đối tượng bên trong grid sẽ có <code>order</code> bằng 0, nhưng chúng ta vẫn có thể gán bằng một giá trị số khác, có thể là số âm hoặc dương, tương tự như với <code>z-index</code>.</p><p>Bây giờ, cây của chúng ta ở cột thứ 2 đang bị nhiễm độc, trong khi cỏ dại ở côt cuối lại đang được tưới nước. Hãy thay đổi giá trị <code>order</code> để cứu lấy cây!</p>',

        },
        board: 'cwccc',
        selector: '> :nth-child(2)',
        style: { 'order': '2' },
        before: "#garden {\n  display: grid;\n  grid-template-columns: 20% 20% 20% 20% 20%;\n  grid-template-rows: 20% 20% 20% 20% 20%;\n}\n\n.water {\n  order: 0;\n}\n\n#poison {\n",
        after: "}"
    },
    {
        //lv19
        name: 'order 2',
        instructions: {
            'en': '<p>Now the water and poison are alternating, even though all of the weeds are at the start of your garden. Set the <code>order</code> of the poisons to remedy this.</p>',

            'vi': '<p>Hiện tại nước và chất độc đang xen kẻ nhau. Hãy dùng thuộc tính <code>order</code> để diệt sạch cỏ dại và tước nước cho cây của mình.</p>',

        },
        board: 'wcwcwcwcwc',
        selector: '> :nth-child(odd)',
        style: { 'order': '-1' },
        before: "#garden {\n  display: grid;\n  grid-template-columns: 20% 20% 20% 20% 20%;\n  grid-template-rows: 20% 20% 20% 20% 20%;\n}\n\n.water {\n  order: 0;\n}\n\n.poison {\n",
        after: "}"
    },
    {
        //lv20
        name: 'grid-template-columns 1',
        instructions: {
            'en': '<p>Up to this point, you\'ve had your garden set up as a grid with five columns, each 20% of the full width, and five rows, each 20% of the full height.</p><p>This was done with the rules <code>grid-template-columns: 20% 20% 20% 20% 20%;</code> and <code>grid-template-rows: 20% 20% 20% 20% 20%;</code> Each rule has five values which create five columns, each set to 20% of the overall width of the garden.</p><p>But you can set the grid up however you like. Give <code>grid-template-columns</code> a new value to water your tree. You\'ll want to set the width of the 1st column to be 50%.',

            'vi': '<p>Cho đến hiện tại, chúng ta đang thiết lập khu vườn với 5 cột, mỗi cột chiếm 20% chiều ngang. Và, 5 hàng, mỗi hàng cũng chiếm 20% tổng chiều dọc.</p><p>Điều này được thiết lập dựa vào thuộc tính <code>grid-template-columns: 20% 20% 20% 20% 20%;</code> và <code>grid-template-rows: 20% 20% 20% 20% 20%;</code></p><p>Nhưng bạn có thể thiết lập grid theo như mong muốn của mình. Gán <code>grid-template-columns</code> giá trị mới để tưới nước cho cây. Cột thứ nhất sẽ chiếm 50% chiều ngang của khu vườn.',

        },
        board: 'c',
        style: { 'grid-template-columns': '50% 50%' },
        before: "#garden {\n  display: grid;\n",
        after: "  grid-template-rows: 20% 20% 20% 20% 20%;\n}\n\n#water {\n  grid-column: 1;\n  grid-row: 1;\n}"
    },
    {
        //lv21
        name: 'grid-template-columns 2',
        instructions: {
            'en': '<p>Specifying a bunch of columns with identical widths can get tedious. Luckily there\'s a <code>repeat</code> function to help with that.</p><p>For example, we previously defined five 20% columns with the rule <code>grid-template-columns: 20% 20% 20% 20% 20%;</code>. This can be simplified as <code>grid-template-columns: repeat(5, 20%);</code></p><p>Using <code>grid-template-columns</code> with the <code>repeat</code> function, create eight columns each with 12.5% width. This way you won\'t overwater your garden.</p>',

            'vi': '<p>Việc xác định số lượng các cột cùng chiều rộng có thể trở nên nhàm chán. Thay vào đó, chúng ta có thể dùng phương thức <code>repeat</code>.</p><p>Ví dụ, trước đây chúng ta đã định nghĩa 5 cột, mỗi cột chiếm 20% chiều rộng bằng thuộc tính <code>grid-template-columns: 20% 20% 20% 20% 20%;</code>. Một cách khác đơn giản hơn là: <code>grid-template-columns: repeat(5, 20%);</code></p><p>Hãy sử dụng <code>grid-template-columns</code> kết hợp với phương thức <code>repeat</code>, để tạo ra 8 cột, mỗi cột chiếm 12.5% chiều rộng.',

        },
        board: 'c',
        classes: { '#plants': 'grid-template-columns-repeat-8-12' },
        style: { 'grid-template-columns': 'repeat(8, 12.5%)' },
        before: "#garden {\n  display: grid;\n",
        after: "  grid-template-rows: 20% 20% 20% 20% 20%;\n}\n\n#water {\n  grid-column: 1;\n  grid-row: 1;\n}"
    },
    {
        //lv22
        name: 'grid-template-columns 4',
        instructions: {
            'en': '<p><code>grid-template-columns</code> doesn\'t just accept values in percentages, but also length units like pixels and ems. You can even mix different units together.</p><p>Here, set three columns to <code>100px</code>, <code>3em</code>, and <code>40%</code> respectively.</p>',

            'vi': '<p><code>grid-template-columns</code> không chỉ nhận vào các giá trị là phần trăm, mà còn nhận vào các đơn vị khác như pixels và ems. bạn cũng có thể kết hợp chúng với nhau .</p><p>Bây giờ, hãy thiết lập 3 cột với giá trị tương ứng <code>100px</code>, <code>3em</code>, và <code>40%</code>.</p>',

        },
        board: 'cwc',
        classes: { '#plants': 'grid-template-columns-100px-3em-40p' },
        style: { 'grid-template-columns': '100px 3em 40%;' },
        before: "#garden {\n  display: grid;\n",
        after: "  grid-template-rows: 20% 20% 20% 20% 20%;\n}"
    },
    {
        //lv23
        name: 'grid-template-columns 5',
        instructions: {
            'en': '<p>Grid also introduces a new unit, the fractional <code>fr</code>. Each <code>fr</code> unit allocates one share of the available space. For example, if two elements are set to <code>1fr</code> and <code>3fr</code> respectively, the space is divided into 4 equal shares; the first element occupies 1/4 and the second element 3/4 of any leftover space.</p><p>Here, weeds make up the left 1/6 of your first row and tree the remaining 5/6. Create two columns with these widths using <code>fr</code> units.</p>',

            'vi': '<p>Grid giới thiệu thêm một đơn vị mới, đó chính là: "fractional" <code>fr</code>. Mỗi đơn vị <code>fr</code> chiếm một phần trên tổng các vùng trống . Ví dụ, nếu 2 đối tượng được gán tương ứng <code>1fr</code> và <code>3fr</code>, không gian sẽ được chia làm 4 phần; đối tượng đầu sẽ chiếm 1/4 và đối tượng thứ 2 chiếm 3/4 phần không gian còn lại bên trái.</p><p>Bây giờ, để cỏ dại chiếm 1/6 và cây chiếm 5/6. bạn hãy tạo ra 2 cột với yêu cầu trên sử dụng đơn vị <code>fr</code>.</p>',

        },
        board: 'wc',
        classes: { '#plants': 'grid-template-columns-1fr-5fr' },
        style: { 'grid-template-columns': '1fr 5fr;' },
        before: "#garden {\n  display: grid;\n",
        after: "  grid-template-rows: 20% 20% 20% 20% 20%;\n}"
    },
    {
        //lv24
        name: 'grid-template-columns 3',
        instructions: {
            'en': '<p>When columns are set with pixels, percentages, or ems, any other columns set with <code>fr</code> will divvy up the space that\'s left over.</p><p>Here the tree form a 50 pixel column on the left, and the weeds a 50 pixel column on the right. With <code>grid-template-columns</code>, create these two columns, and use <code>fr</code> to make three more columns that take up the remaining space in between.</p>',


            'vi': '<p>Khi các cột được thiết lập bằng đơn vị pixels, phần trăm, hoặc ems, thì các cột khác dùng đơn vị <code>fr</code> sẽ chiếm khoảng không gian còn lại.</p><p>Hiên tại, cây chiếm một cột rộng 50px bên trái và cỏ dại cũng chiếm một cột rộng 50px bên phải. bạn hãy dùng <code>grid-template-columns</code>, tạo ra 2 cột đấy.Sau đó, sử dụng <code>fr</code> để tạo thêm ba cột chiêm hết khoảng không gian ở giữa.</p>',

        },
        board: 'cw',
        classes: {
            '#plants': 'grid-template-columns-50px-1fr-1fr-1fr-50px',
            '#plants > :nth-child(1), #garden > :nth-child(1)': 'grid-area-1-1-6-2',
            '#plants > :nth-child(2), #garden > :nth-child(2)': 'grid-area-1-5-6-6'
        },
        style: { 'grid-template-columns': '50px 1fr 1fr 1fr 50px;' },
        before: "#garden {\n  display: grid;\n",
        after: "  grid-template-rows: 20% 20% 20% 20% 20%;\n}\n\n#water {\n  grid-area: 1 / 1 / 6 / 2;\n}\n\n#poison {\n  grid-area: 1 / 5 / 6 / 6;\n}"
    },
    {
        //lv25
        name: 'grid-template-columns 6',
        instructions: {
            'en': '<p>Now there is a 75 pixel column of weeds on the left side of your garden. 3/5 of the remaining space is growing tree, while 2/5 has been overrun with weeds.</p><p>Use <code>grid-template-columns</code> with a combination of <code>px</code> and <code>fr</code> units to make the necessary columns.</p>',

            'vi': '<p>Hiện tại, cỏ dại đang chiếm một cột rộng 75px phía bên trái của khu vườn. cây chiếm 3/5 và cỏ dại sẽ chiếm 2/5 không gian còn lại.</p><p>Hãy dùng <code>grid-template-columns</code> kết hơp với các đơn vị <code>px</code> và <code>fr</code> để tạo ra các cột cần thiết.</p>',

        },
        board: 'wcw',
        classes: { '#plants': 'grid-template-columns-6', '#garden, #overlay': 'grid-template-rows-100p' },
        style: { 'grid-template-columns': '75px 3fr 2fr;' },
        before: "#garden {\n  display: grid;\n",
        after: "  grid-template-rows: 100%;\n}"
    },
    {
        //lv26
        name: 'grid-template-rows 1',
        instructions: {
            'en': '<p><code>grid-template-rows</code> works much the same as <code>grid-template-columns</code>.</p><p>Use <code>grid-template-rows</code> to water all but the top 50 pixels of your garden. Note that the water is set to fill only your 5th row, so you\'ll need to create 5 rows in total.</p>',

            'vi': '<p><code>grid-template-rows</code> hoạt động tương tự như <code>grid-template-columns</code>.</p><p>Hãy dùng <code>grid-template-rows</code> để tưới nước cho toàn bộ cây trừ khu vực 50px trên cùng . Lưu ý rằng, nước chỉ được thiết lập để tưới cho dòng thứ 5 của bạn, bạn sẽ cần tạo tổng cộng 5 dòng.',

        },
        board: 'c',
        classes: {
            '#plants': 'grid-template-rows-50px-0-0-0-1fr',
            '#plants > :nth-child(1), #garden > :nth-child(1)': 'grid-area-5-1-6-6'
        },
        style: { 'grid-template-rows': '1fr 100px;' },
        before: "#garden {\n  display: grid;\n  grid-template-columns: 20% 20% 20% 20% 20%;\n",
        after: "}\n\n#water {\n  grid-column: 1 / 6;\n  grid-row: 5 / 6;\n}"
    },
    {
        //lv27
        name: 'grid-template 1',
        instructions: {
            'en': '<p><code>grid-template</code> is a shorthand property that combines <code>grid-template-rows</code> and <code>grid-template-columns</code>.</p><p>For example, <code>grid-template: 50% 50% / 200px;</code> will create a grid with two rows that are 50% each, and one column that is 200 pixels wide.</p><p>Try using <code>grid-template</code> to water an area that includes the top 60% and left 200 pixels of your garden.</p>',

            'vi': '<p><code>grid-template</code> là cú pháp rút gọn kết hợp giữa <code>grid-template-rows</code> và <code>grid-template-columns</code>.</p><p>Ví dụ, <code>grid-template: 50% 50% / 200px;</code> sẽ tạo 2 dòng, mỗi dòng chiếm 50%, và một cột rộng 200 pixels.</p><p>Hãy dùng <code>grid-template</code> để tưới nước cho khu vực chiếm 60% trên cùng và 200 pixels phía bên trái của khu vườn.</p>',

        },
        board: 'c',
        style: { 'grid-template': '60% 1fr / 200px 1fr' },
        before: "#garden {\n  display: grid;\n",
        after: "}\n\n#water {\n  grid-column: 1;\n  grid-row: 1;\n}"
    },
    {
        //lv28
        name: 'grid-template 2',
        instructions: {
            'en': '<p>Your garden is looking great. Here you\'ve left a 50 pixel path at the bottom of your garden and filled the rest with tree.</p><p>Unfortunately, the left 20% of your tree have been overrun with weeds. Use CSS grid one last time to treat your garden.</p>',

            'vi': '<p>Khu vườn của bạn trông tuyệt vời!. bạn đã để 1 đường dẫn rộng 50px phía dưới cùng và trồng cây cho khoảng đất trống còn lại.</p><p>Thật không may, 20% không gian bên trái đã bị cỏ dại chiếm. Hãy dùng CSS grid một lần cuối để chăm cho khu vườn của mình nhé.</p>',

        },
        board: 'wc',
        classes: { '#plants': 'grid-template-2' },
        style: { 'grid-template': '1fr 50px / 20% 1fr' },
        before: "#garden {\n  display: grid;\n",
        after: "}"
    }
];

var levelWin = {
    name: 'win',
    instructions: {
        'en': '<p>You win! By the power of CSS grid, you were able to grow enough tree for Farmer to bake his world famous 20-carrot cake. What, were you expecting a different hoppy friend?</p><p>If you enjoyed Grid Garden, be sure to check out <a href="#">Flexbox Owlet</a> to learn about another powerful new feature of CSS layout. You can also find new coding games over at <a href="#">Codepip</a>.</p><p>Want to support Grid Garden? Spread the word to your friends and family about Grid Garden!</p>',

        'vi': '<p>Thắng rồi! với sức mạnh của CSS grid, bạn đã có đủ cây để Farmer làm nên chiếc bánh siêu phẩm 20 củ cây. Huh, bạn có đang mong chờ một người bạn thú vị khác?</p><p>Nếu bạn cảm thấy thú vị với Grid Garden, hãy xem thử một game khác là <a href="#">Flexbox Owlet</a> để học thêm về những tính năng mạnh mẽ khác của CSS layout. bạn cũng có thể xem thêm những game khác tại <a href="#">Codepip</a>.</p><p>bạn muốn ủng hộ cho Grid Garden? Hãy xem qua các khóa học về lập trình và thiết kế web của <a href="#">Treehouse</a>. Đừng quên giới thiệu với bạn bè về Grid Garden nhé!</p>',

    },
    board: '',
    classes: { '#garden, #plants, #overlay': 'win' },
    style: {},
    before: "#pond {\n  display: flex;\n",
    after: "}"
};
